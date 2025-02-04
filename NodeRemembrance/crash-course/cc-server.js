import http from 'http'
import {defaultURL, aboutURL, notFoundURL} from './simpleController.js'
import url from 'url'
import path from 'path';
import fs from 'fs/promises'
const PORT = process.env.PORT

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)

const server = http.createServer(async (request, response) => {

    if (request.method === 'GET') {
        if (request.url === '/') {
            defaultURL(request, response)
        } else if (request.url === '/about') {
            aboutURL(request, response)
        } else {
            notFoundURL(request, response)
        }
    } else {
        throw new Error('Method not supported at this time')
    }

});

server.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
});