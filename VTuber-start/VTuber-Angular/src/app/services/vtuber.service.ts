import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { VTuber } from '../models/vtuber';

@Injectable({
  providedIn: 'root',
})
export class VtuberService {

  private completeVtuberListSubject = new BehaviorSubject<VTuber[]>([]);
  completeVtuberList = this.completeVtuberListSubject.asObservable();

  constructor(private httpService: HttpService) {}

  // Fetch VTubers and update BehaviorSubject
  fetchVTubers(): void {
    this.httpService.getVTubers().subscribe({
      next: (data) => {
        this.completeVtuberListSubject.next(data.Vtubers);
      },
      error: (err) => {
        console.error('Error fetching VTuber data:', err);
      }
    });
  }

  // Get the latest value of completeVtuberList synchronously
  getCurrentVtuberList(): VTuber[] {
    return this.completeVtuberListSubject.value;
  }
}
