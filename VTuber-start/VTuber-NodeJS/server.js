import express from 'express'
import path from 'path'
import url from 'url'
import fs from "fs";
import cors from 'cors';
import vtuberRouter from './routers/vtuber-router.js'
import orgRouter from './routers/org-router.js'

// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let config;
try {
    const configPath = path.join(__dirname, './config', 'appconfig.json');
    config = JSON.parse(fs.readFileSync(configPath));
} catch (error) {
    console.error("Failed to load appconfig.json:", error.message);
    process.exit(1); // Exit process if configuration is invalid
}


const PORT = config.server.port || 5001
const app = express();

app.use(express.json())
app.use(cors());
app.use('/vtuber', vtuberRouter(config))
app.use('/org', orgRouter(config))

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})