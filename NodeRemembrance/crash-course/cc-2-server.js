import { createServer } from 'http'
import {v4 as uuidv4, v6 as uuidv6} from 'uuid'
import { notFoundURL } from './simpleController.js'

const PORT = process.env.PORT

const users = [
    {id : uuidv4(), name: 'John Doe'},
    {id : uuidv4(), name: 'Jane Doe'},
    {id : uuidv6(), name: 'John Smith'}
]

//Logger middleware
const logger = (request, response, next) => {
    console.log(`${request.method} ${request.url}`)
    next();
}

//JSON middleware
const jsonMiddleware = (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    next();
}

//Route handler for GET /api/users
const getUsersHandler = (request, response) => {
    response.write(JSON.stringify(users))
    response.end()
}

//Route handler for GET /api/users/{number}
const findUsersHandler = (request, response) => {
    let id = parseInt(request.url.split('/')[3])
    if (id > 0 && id <= users.length) {
        response.write(JSON.stringify(users[id-1]))
        response.end()
    } else {
        notFoundURL(request, response)
    }
}

//Router handler for POST
const createUser = (request, response) => {
    let body = '';
    //Listen for data
    request.on('data', (chunk) => {
        let newUser = JSON.parse(chunk)
        newUser.id = uuidv4()
        body += JSON.stringify(newUser)
    })
    request.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser)
        response.statusCode = 201;
        response.write(JSON.stringify(newUser))
        response.end()
    })
}

const server = createServer(async (request, response) => {
    logger(request, response, () => {
        const numRegex = /^\d+$/;
        jsonMiddleware(request, response, () => {
            if (request.url === '/api/users' && request.method === 'GET') { 
                getUsersHandler(request, response)
            } else if (numRegex.test(request.url.split('/')[3]) && request.method === 'GET') {
                findUsersHandler(request, response)
            } else if (request.url === '/api/users' && request.method === 'POST') {
                createUser(request, response)
            } else {
                notFoundURL(request, response)
            }
        });
    })
});

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})