import { Router } from "express";
import axios from "axios";

const vtuberRouter = (config: { [x: string]: any }) => {
  const router = Router();
  const javaServerInfo = config["java-server"];
  const javaServerURL = `${javaServerInfo.protocol}://${javaServerInfo.url}:${javaServerInfo.port}`;

  router.get("/", async (request, response) => {
    let status = 200;
    try {
      const vtuberGetCall = await axios.get(
        javaServerURL + javaServerInfo.vtuberController.getAll
      );
      if (vtuberGetCall.data) {
        return response.status(status).json(vtuberGetCall.data);
      }
    } catch (error: unknown) {
      status = 500;
      if (error instanceof Error) {
        console.error("Error in GET /vtuber:", error.message);
      } else {
        console.error("Error in GET /vtuber:", error);
      }
    }
    return response.status(status).json({
      message: "Failed to fetch vtuber data",
      javaServerURL,
    });
  });

  return router;
};

export default vtuberRouter;
