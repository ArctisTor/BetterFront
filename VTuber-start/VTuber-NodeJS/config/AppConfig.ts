interface ServerConfig {
  protocol: string;
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
  "java-server": JavaServerConfig;
}

// Now the class

export class AppConfig implements AppConfigData {
  server: ServerConfig;
  "java-server": JavaServerConfig;

  constructor(data: AppConfigData) {
    this.server = data.server;
    this["java-server"] = data["java-server"];
  }

  // Optional: Add methods to access specific parts or helper methods
  getServerURL(): string {
    return `${this.server.protocol}://localhost:${this.server.port}`;
  }

  getJavaServerInstanceURL(index = 0): string {
    const instance = this["java-server"].instances[index];
    return `${instance.protocol}://${instance.url}:${instance.port}`;
  }

  getVtuberGetAllPath(): string {
    return this["java-server"].vtuberController.getAll;
  }

  getOrgGetAllPath(): string {
    return this["java-server"].orgController.getAll;
  }
}
