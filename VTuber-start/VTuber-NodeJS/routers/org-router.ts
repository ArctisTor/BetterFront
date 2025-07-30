import { Router } from "express";
import axios from "axios";
import { AppConfig } from "../config/AppConfig.js";

const orgRouter = (config: AppConfig) => {
  const router = Router();

  router.get("/", async (request, response) => {
    let status = 200;
    try {
      const orgGetCall = await axios.get(
        config.getJavaServerInstanceURL()+ config.getOrgGetAllPath()
      );
      if (orgGetCall.data) {
        return response.status(status).json(orgGetCall.data);
      }
    } catch (error: unknown) {
      status = 500;
      if (error instanceof Error) {
        // For axios errors, 'response' is on error but not on Error type, so cast carefully
        const axiosError = error as { response?: { data?: any } };
        console.error(
          "Error in GET /organization:",
          error.message,
          axiosError.response?.data || ""
        );
      } else {
        console.error("Error in GET /organization:", error);
      }
    }
    return response.status(status).json({
      message: "Failed to fetch organization data",
      javaServerURL : config.getJavaServerInstanceURL(),
    });
  });

  return router;
};

export default orgRouter;
