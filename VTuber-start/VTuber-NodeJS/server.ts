import express from 'express';
import path from 'path';
import url from 'url';
import fs from 'fs';
import cors from 'cors';
import vtuberRouter from './routers/vtuber-router.js';
import orgRouter from './routers/org-router.js';
import { AppConfig, JavaServerInstance } from './config/AppConfig.js';
import { HeartBeatChecker } from './heartbeat-check/heartbeatChecker.js';
import { logger } from './log/logger.js';

// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __configPath = path.join(__dirname, './config', 'appconfig.json');

let config: AppConfig;
try {
  const rawData = fs.readFileSync(__configPath, 'utf-8');
  const jsonData = JSON.parse(rawData);
  config = new AppConfig(jsonData);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Failed to load appconfig.json:', error.message);
  } else {
    console.error('Error in GET /vtuber:', error);
  }
  process.exit(1); // Exit process if configuration is invalid
}

const PORT = config.server.port || 5001;

// Create app and mount routers
const app = express();
app.use(express.json());
app.use(cors());

// Mount points for vtuber and org routers
const vtuberMount = express.Router();
const orgMount = express.Router();

app.use('/vtuber', vtuberMount);
app.use('/org', orgMount);

// Run heartbeat checks
const checker = new HeartBeatChecker();
await checker.checkJavaInstances(config);
refreshRouters(config); // Mount only healthy server routes

setInterval(async () => {
  await checker.checkJavaInstances(config);
  refreshRouters(config);
}, 60_000); // every 60s

app.listen(PORT, () => {
  logger.logInfo(`Server is running on PORT: ${PORT}`)
  console.log(`Server is running on PORT: ${PORT}`);
});

function refreshRouters(config: AppConfig) {
  // 1) Select preferred server if none or if current one unhealthy
  const preferred = config.preferredJavaServer;
  const stillHealthy =
    preferred &&
    config.healthyJavaServers.some(
      (server) =>
        server.protocol === preferred.protocol &&
        server.url === preferred.url &&
        server.port === preferred.port
    );

  if (!preferred || !stillHealthy) {
    if (config.healthyJavaServers.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * config.healthyJavaServers.length
      );
      const selected = config.healthyJavaServers[randomIndex];
      // Wrap plain object in JavaServerInstance
      config.preferredJavaServer = new JavaServerInstance(
        selected.protocol,
        selected.url,
        selected.port
      );
      console.log(
        'Preferred server selected/updated:',
        config.preferredJavaServer?.toString()
      );
    } else {
      config.preferredJavaServer = null;
      console.warn('No healthy servers available to select preferred server.');
    }
  } else {
    // Preferred server still healthy, no action needed
    console.log(
      `Preferred server is still healthy: ${config.preferredJavaServer?.toString()}`
    );
  }

  // 2) Clear old routes
  vtuberMount.stack = [];
  orgMount.stack = [];

  // 3) Add new routes
  vtuberMount.use(vtuberRouter(config));
  orgMount.use(orgRouter(config));
}
