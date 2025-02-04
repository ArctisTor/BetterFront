import http from 'http'

const PORT = process.env.PORT

const server = http.createServer(async (request, response) => {

})

server.listen(PORT, ()=> {
    console.log(`Server is running on Port:  ${PORT}`)
})

