import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, catchError, map, of, take, tap } from 'rxjs';
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
    this.httpService.getVTubers().pipe(
      take(1), // Ensures automatic unsubscription
      map(response => response.Vtubers), // Extract the array
      tap(vtubers => this.completeVtuberListSubject.next(vtubers)), // Update BehaviorSubject
      catchError(err => {
        console.error('Error fetching VTuber data:', err);
        this.completeVtuberListSubject.next([]); // Emit empty array on error
        return of([]); // Return empty array
      })
    ).subscribe();
  }

  // Get the latest value of completeVtuberList synchronously
  getCurrentVtuberList(): VTuber[] {
    return this.completeVtuberListSubject.value;
  }
}
