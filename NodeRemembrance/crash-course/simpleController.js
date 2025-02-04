import url from 'url'
import path from 'path';
import fs from 'fs/promises'

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const defaultURL = async (request, response) => {
    let filePath = path.join(__dirname, 'public', 'index.html')
    const data = await fs.readFile(filePath)
    response.writeHead(200, {'Content-type' : 'text/html'})
    response.write(data);
    response.end()
}

export const aboutURL = async (request, response) => {
    let filePath = path.join(__dirname, 'public', 'about.html')
    const data = await fs.readFile(filePath)
    response.writeHead(200, {'Content-type' : 'text/html'})
    response.write(data);
    response.end()
}

export const notFoundURL = async (request, response) => {
    response.writeHead(404, {'Content-type' : 'text/html'})
    response.end(' <h1> Not Found </h1>')
}