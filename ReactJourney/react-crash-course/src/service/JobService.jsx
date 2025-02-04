

export const fetchJobs = async () => {
    let jobs = []
    try {
        let response = await fetch("/jobs");
        response = await response.json();
        jobs = response.jobs
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        return jobs
    }
};

export const fetchJob = async (id) => {
    if (id === null) {
        console.error('No Id was provided for the job.')
        return;
    }

    let job = {}
    try {
        let response = await fetch("/jobs/"+id)
        response = await response.json();
        job = response
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        return job
    }

}

export const postJob = async (job) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
    }

    let response = await fetch('/jobs', requestOptions)
    response = await response.json()
}


export const deleteJob = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

    let job = {}
    try {
        let response = await fetch(`/jobs/${id}`, requestOptions)
        response = await response.json()
        job = response
    } catch (error) {
        console.error(`Error deleting job with id ${id}`, error);
    } finally {
        return job
    }
}

export const updateJob = async (job) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify(job)
    }

    let jobs = []
    try {
        let response = await fetch('/jobs', requestOptions)
        response = await response.json()
        jobs = response.jobs
    } catch (error) {
        console.error(`Error update job with id ${job.id}`, error)
    } finally {
        return jobs
    }

}

export const loadJobData = async ({params}) => {
    let job = fetchJob(params.id);
    return job;
};

export const loadJobs = async() => {
    let jobs = fetchJobs()
    return jobs
}