import { Router } from 'express';
import axios from 'axios';
import { AppConfig } from '../config/AppConfig.js';

import {logger} from '../log/logger.js'

const vtuberRouter = (config: AppConfig) => {
  const router = Router();

  router.get('/', async (request, response) => {
    let status = 200;
    try {
      const vtuberGetCall = await axios.get(
        config.getJavaServerInstanceURL() + config.getVtuberGetAllPath()
      );
      if (vtuberGetCall.data) {
        return response.status(status).json(vtuberGetCall.data);
      }
    } catch (error: unknown) {
      status = 500;
      if (error instanceof Error) {
        logger.logError(`Error in GET /vtuber: ${error.message}`);
      } else {
        logger.logError(`Error in GET /vtuber: ${error}`)
      }
    }
    return response.status(status).json({
      message: 'Failed to fetch vtuber data',
      javaServerURL: config.getJavaServerInstanceURL(),
    });
  });

  return router;
};

export default vtuberRouter;
