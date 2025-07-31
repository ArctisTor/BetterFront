interface ServerConfig {
  protocol: string;
  url: string;
  port: number | string;
}

export interface JavaServerInstance {
  protocol: string;
  url: string;
  port: number | string;
}

// Define separate interfaces for each controller
interface VtuberControllerPaths {
  getAll: string;
}

interface OrgControllerPaths {
  getAll: string;
}

interface HeartbeatControllerPaths {
  heartBeat: string;
}

interface JavaServerConfig {
  instances: JavaServerInstance[];
  vtuberController: VtuberControllerPaths;
  orgController: OrgControllerPaths;
  heartbeatController: HeartbeatControllerPaths;
}

interface AppConfigData {
  server: ServerConfig;
  javaServer: JavaServerConfig;
}

export class AppConfig implements AppConfigData {
  server: ServerConfig;
  javaServer: JavaServerConfig;
  healthyJavaServers: JavaServerInstance[] = [];
  unhealthyJavaServers: JavaServerInstance[] = [];

  constructor(data: AppConfigData) {
    this.server = data.server;
    this.javaServer = data.javaServer;
  }

  getServerURL(): string {
    return `${this.server.protocol}://${this.server.url}:${this.server.port}`;
  }

  getJavaServerInstanceURL(index = 0): string {
    const instance = this.javaServer.instances[index];
    return `${instance.protocol}://${instance.url}:${instance.port}`;
  }

  getVtuberGetAllPath(): string {
    return this.javaServer.vtuberController.getAll;
  }

  getOrgGetAllPath(): string {
    return this.javaServer.orgController.getAll;
  }

  getHeartBeatPath(): string {
    return this.javaServer.heartbeatController.heartBeat;
  }
}
