import { Router } from "express";
import axios from "axios";

const orgRouter = (config: { [x: string]: any }) => {
  const router = Router();
  const javaServerInfo = config["java-server"];
  const javaServerURL = `${javaServerInfo.protocol}://${javaServerInfo.url}:${javaServerInfo.port}`;

  router.get("/", async (request, response) => {
    let status = 200;
    try {
      const orgGetCall = await axios.get(
        javaServerURL + javaServerInfo.orgController.getAll
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
      javaServerURL,
    });
  });

  return router;
};

export default orgRouter;
