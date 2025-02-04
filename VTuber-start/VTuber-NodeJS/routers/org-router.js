import { Router } from 'express';
import axios from 'axios';

const orgRouter = (config) => {
    const router = Router();
    const javaServerInfo = config['java-server']
    const javaServerURL = `${javaServerInfo.protocol}://${javaServerInfo.url}:${javaServerInfo.port}`;

    router.get('/', async (request, response) => {
        let status = 200;
        try {
            const orgGetCall = await axios.get(javaServerURL+javaServerInfo.orgController.getAll)
            if (orgGetCall.data) {
                return response.status(status).json(orgGetCall.data)
            }
        } catch {
            status = 500
            console.error('Error in GET /organization:', error.message, error.response?.data || '');
        }
        return response.status(status).json({
            message: 'Failed to fetch organization data',
            javaServerURL,
        });
    })

    return router;
}

export default orgRouter;