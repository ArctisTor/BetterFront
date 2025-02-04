import express, { response } from 'express'
import path from 'path'
import fs from 'fs'
import url from 'url'

const routes = express.Router();

// Get current path because of type module
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const jobsListings = JSON.parse(fs.readFileSync(path.join(__dirname, '../jsonFiles', 'jobs.json')))


routes.get('/', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    response.json(jobsListings)
})

routes.get('/:id', (request, response) => {
    let id = request.params.id
    let job = jobsListings.jobs.find((job) => job.id === id);
    let status = 200
    
    if (!job) {
        let error = new Error(`A job with the id of ${id} was not found`);
        status = 404;
        response.status(status).json({
            error: {
                message: error.message
            }
        })
    }

    response.status(status).json(job)
})

routes.post('/', (request, response) => {
    let status = 200
    let newJob = request.body
    newJob.id =  "" + (jobsListings.jobs.length + 1)
    jobsListings.jobs.push(newJob)


    response.status(status).json(jobsListings)
})

routes.put('/', (request, response) => {
    let status = 200;
    let updateJob = request.body

    let index = jobsListings.jobs.findIndex(job => job.id === updateJob.id)
    if (index !== -1) {
        jobsListings.jobs[index] = updateJob
        response.status(status).json(jobsListings)
    } else {
        status = 404
        response.status(status).json({'message' : 'Job was not found.', 'job' : updateJob})
    }
})

routes.delete('/:id', (request, response) => {
    let id = request.params.id
    let status = 200

    let newJobListings = jobsListings.jobs.filter(job => job.id != id);
    jobsListings.jobs = newJobListings
    response.status(status).json(jobsListings)
})

export default routes;