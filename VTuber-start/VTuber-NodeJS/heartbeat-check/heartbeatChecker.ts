import { AppConfig, JavaServerInstance } from '../config/AppConfig.js';
import axios from 'axios';

export class HeartBeatChecker {
  public async checkJavaInstances(appconfig: AppConfig): Promise<void> {
    for (const instance of appconfig.javaServer.instances) {
      await this.checkJavaInstanceHealth(instance, appconfig);
    }
  }

  public async checkJavaInstanceHealth(
    instance: JavaServerInstance,
    appconfig: AppConfig
  ): Promise<void> {
    try {
      const heartBeatURL =
        `${instance.protocol}://${instance.url}:${instance.port}` +
        appconfig.getHeartBeatPath();

      const response = await axios.get(heartBeatURL);
      const data = response.data;

      if (
        data?.['version-number'] &&
        data?.['database-info']?.['database-connected'] === true
      ) {
        // Remove from unhealthy if present
        appconfig.unhealthyJavaServers = appconfig.unhealthyJavaServers.filter(
          (i) => i !== instance
        );
        // Add if not already present
        if (!appconfig.healthyJavaServers.includes(instance)) {
          appconfig.healthyJavaServers.push(instance);
        }
      } else {
        // Remove from healthy if present
        appconfig.healthyJavaServers = appconfig.healthyJavaServers.filter(
          (i) => i !== instance
        );
        // Add if not already present
        if (!appconfig.unhealthyJavaServers.includes(instance)) {
          appconfig.unhealthyJavaServers.push(instance);
        }
      }
    } catch (error: unknown) {
      // On error, treat as unhealthy
      appconfig.healthyJavaServers = appconfig.healthyJavaServers.filter(
        (i) => i !== instance
      );
      if (!appconfig.unhealthyJavaServers.includes(instance)) {
        appconfig.unhealthyJavaServers.push(instance);
      }
      if (error instanceof Error) {
        console.error(
          `Heartbeat check failed for ${instance.toString}:`,
          error.message
        );
      } else {
        console.error(`Heartbeat check failed for ${instance.toString()}:`, error);
      }
    }
  }

  public async checkUnHealthyServers(appconfig: AppConfig): Promise<void> {
    for (const instance of appconfig.unhealthyJavaServers) {
      await this.checkJavaInstanceHealth(instance, appconfig);
    }
  }

  public async checkHealthyServers(appconfig: AppConfig): Promise<void> {
        for (const instance of appconfig.healthyJavaServers) {
      await this.checkJavaInstanceHealth(instance, appconfig);
    }
  }
  
}
