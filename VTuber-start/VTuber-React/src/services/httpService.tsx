import { BehaviorSubject, Observable } from 'rxjs';
import { VTuber } from '../models/VTuber';

class HttpService {
  // Holds the current list and emits updates
  private vtubersSubject = new BehaviorSubject<VTuber[]>([]);

  // Return an Observable instead of a Promise
  getAllVTubers(): Observable<VTuber[]> {
    return new Observable<VTuber[]>((subscriber) => {
      fetch('/vtuber')
        .then((response) => response.json())
        .then((data) => {
          const vtubers = data.Vtubers as VTuber[];
          this.vtubersSubject.next(vtubers); // update internal state
          subscriber.next(vtubers); // emit to subscriber
          subscriber.complete(); // complete Observable
        })
        .catch((error) => {
          console.error('Error fetching VTubers:', error);
          subscriber.error(error); // emit error
        });
    });
  }

  // Optional helper to get the current value
  getVTubersSubject(): VTuber[] {
    return this.vtubersSubject.getValue();
  }
}

const httpService = new HttpService();
export default httpService; //export a Singleton pattern
