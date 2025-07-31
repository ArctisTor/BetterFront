interface ServerConfig {
  protocol: string;
  url: string;
  port: number | string; 
}

interface JavaServerInstance {
  protocol: string;
  url: string;
  port: number | string;
}

interface ControllerPaths {
  getAll: string;
}

interface JavaServerConfig {
  instances: JavaServerInstance[];
  vtuberController: ControllerPaths;
  orgController: ControllerPaths;
}

interface AppConfigData {
  server: ServerConfig;
  javaServer: JavaServerConfig;
}

export class AppConfig implements AppConfigData {
  server: ServerConfig;
  javaServer: JavaServerConfig;

  constructor(data: AppConfigData) {
    this.server = data.server;
    this.javaServer = data.javaServer;
  }

  // Optional: Add methods to access specific parts or helper methods
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
}
