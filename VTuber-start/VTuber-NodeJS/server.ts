import express from "express";
import path from "path";
import url from "url";
import fs from "fs";
import cors from "cors";
import vtuberRouter from "./routers/vtuber-router.js";
import orgRouter from "./routers/org-router.js";
import { AppConfig } from "./config/AppConfig.js";

// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __configPath = path.join(__dirname, "./config", "appconfig.json");

let config: AppConfig;
try {
  const rawData = fs.readFileSync(__configPath, "utf-8");
  const jsonData = JSON.parse(rawData);
  config = new AppConfig(jsonData);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Failed to load appconfig.json:", error.message);
  } else {
    console.error("Error in GET /vtuber:", error);
  }
  process.exit(1); // Exit process if configuration is invalid
}

const PORT = config.server.port || 5001;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/vtuber", vtuberRouter(config));
app.use("/org", orgRouter(config));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
