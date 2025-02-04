import express, { response } from 'express'
import {v4 as uuidv4, v6 as uuidv6} from 'uuid'


const routes = express.Router();

const users = [
    {id : uuidv4(), name: 'John Doe'},
    {id : uuidv4(), name: 'Jane Doe'},
    {id : uuidv6(), name: 'John Smith'}
]

routes.get('/', (request, response) => {
    response.json(users)
})

routes.post('/', (request, response) => {
    let newUser = {
        id : uuidv4(),
        name : request.body.name
    }
    users.push(newUser)
    response.status(200).json(newUser)
})

export default routes;