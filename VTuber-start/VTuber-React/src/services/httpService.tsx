import { VTuber } from "../models/VTuber";

class HttpService {
  private vtubers: VTuber[] = [];
  private vtuberSubscribers: ((vtubers: VTuber[]) => void)[] = [];

  subscribeOnVTubers(callback: (vtubers: VTuber[]) => void) {
    this.vtuberSubscribers.push(callback);
  }

  unsubscribeOnVTubers(callback: (vtubers: VTuber[]) => void) {
    this.vtuberSubscribers = this.vtuberSubscribers.filter(
      (cb) => cb !== callback
    );
  }

  // Notify all subscribers of a change
  private notifyVtuberSubscribers(): void {
    this.vtuberSubscribers.forEach((callback) => callback(this.vtubers));
  }

  async getAllVTubers(): Promise<void> {
    try {
      let response = await fetch("/vtuber");
      const data = await response.json();
      this.vtubers = data.Vtubers as VTuber[];
      this.notifyVtuberSubscribers();
    } catch (error) {
      console.error("Error fetching VTubers:", error);
    }
  }

  getVTubers(): VTuber[] {
    return this.vtubers;
  }
}

export default HttpService;