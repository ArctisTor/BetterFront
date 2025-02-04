import http from 'http'
import express from 'express'
import path from 'path'
import url from 'url'
import mainRouter from './mainRouter.js'

const PORT = process.env.PORT || 5000
const app = express();

//Using body-parser
app.use(express.json())

// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//setup static folder
//app.use(express.static(path.join(__dirname, 'public')))


app.use('/api', mainRouter)


app.get('/', (request, response) => {
    //response.send('Welcome back!')
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.listen(PORT, ()=> {
    console.log(`Server is running on Port:  ${PORT}`)
    console.log()
})

