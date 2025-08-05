interface ServerConfig {
  protocol: string;
  url: string;
  port: number | string;
}

export class JavaServerInstance {
  protocol: string;
  url: string;
  port: number | string;

  constructor(protocol: string, url: string, port: number | string) {
    this.protocol = protocol;
    this.url = url;
    this.port = port;
  }

  toString(): string {
    return `${this.protocol}://${this.url}:${this.port}`;
  }
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
  preferredJavaServer: JavaServerInstance | null = null;

  constructor(data: AppConfigData) {
    this.server = data.server;
    this.javaServer = data.javaServer;
  }

  getServerURL(): string {
    return `${this.server.protocol}://${this.server.url}:${this.server.port}`;
  }

  getJavaServerInstanceURL(index = 0): string | null {
    const instance =
      this.preferredJavaServer ??
      (index !== undefined
        ? this.healthyJavaServers[index]
        : this.healthyJavaServers[
            Math.floor(Math.random() * this.healthyJavaServers.length)
          ]);
    if (!instance) {
      return null;
    }
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
