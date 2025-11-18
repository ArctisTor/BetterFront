import { Router } from 'express';
import { AppConfig } from '../config/AppConfig.js';
import axios from 'axios';
import { logger } from '../log/logger.js';

const meadRecipeRouter = (config: AppConfig) => {
  const router = Router();

  router.get('/', async (request, response) => {
    let status = 200;
    try {
      const meadRecipeGetCall = await axios.get(
        config.getJavaServerInstanceURL() + config.getMeadRecipeGetAllPath()
      );
      if (meadRecipeGetCall.data) {
        return response.status(status).json(meadRecipeGetCall.data);
      }
    } catch (error: unknown) {
      status = 500;
      if (error instanceof Error) {
        logger.logError(`Error in GET /meads: ${error.message}`);
      } else {
        logger.logError(`Error in GET /meads: ${error}`);
      }
    }
    return response.status(status).json({
      message: 'Failed to fetch mead recipe data',
      javaServerURL: config.getJavaServerInstanceURL(),
    });
  });

  return router;
};

export default meadRecipeRouter;
