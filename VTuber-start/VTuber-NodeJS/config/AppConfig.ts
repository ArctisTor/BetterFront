export class ServerConfig {
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

export class JavaServerConfig {
  public instances: JavaServerInstance[];
  public vtuberController: VtuberControllerPaths;
  public orgController: OrgControllerPaths;
  public heartbeatController: HeartbeatControllerPaths;

  constructor(
    instances: JavaServerInstance[],
    vtuberController: VtuberControllerPaths,
    orgController: OrgControllerPaths,
    heartbeatController: HeartbeatControllerPaths
  ) {
    this.instances = instances;
    this.vtuberController = vtuberController;
    this.orgController = orgController;
    this.heartbeatController = heartbeatController;
  }
}

export class HeartBeatSettings {
  public refreshInMinutes: number;

  constructor(refreshInMinutes: number) {
    this.refreshInMinutes = refreshInMinutes;
  }
}

export class AppConfigData {
  constructor(
    public server: ServerConfig,
    public javaServer: JavaServerConfig,
    public heartBeatSettings: HeartBeatSettings
  ) {}
}

export class AppConfig implements AppConfigData {
  public server: ServerConfig;
  public javaServer: JavaServerConfig;
  public heartBeatSettings: HeartBeatSettings;
  public healthyJavaServers: JavaServerInstance[] = [];
  public unhealthyJavaServers: JavaServerInstance[] = [];
  public preferredJavaServer: JavaServerInstance | null = null;

  constructor(data: AppConfigData) {
    this.server = new ServerConfig(
      data.server.protocol,
      data.server.url,
      data.server.port
    );

    this.javaServer = new JavaServerConfig(
      data.javaServer.instances.map(
        (i) => new JavaServerInstance(i.protocol, i.url, i.port)
      ),
      data.javaServer.vtuberController,
      data.javaServer.orgController,
      data.javaServer.heartbeatController
    );

    this.heartBeatSettings = new HeartBeatSettings(
      data.heartBeatSettings.refreshInMinutes
    );
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
