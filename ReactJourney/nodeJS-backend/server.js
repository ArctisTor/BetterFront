import express from 'express'
import path from 'path'
import url from 'url'
import jobsRouters from './routers/jobsRouters.js'
import fs from "fs";


// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = JSON.parse(fs.readFileSync(path.join(__dirname, './config', 'appconfig.json')))

const PORT = config.server.port || 5001
const app = express();

app.use(express.json())

app.use('/jobs', jobsRouters)
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})