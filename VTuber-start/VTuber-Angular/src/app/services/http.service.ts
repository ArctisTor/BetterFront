import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VTuber } from '../models/vtuber';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

    // Fetch all VTubers
    getVTubers(): Observable<VTuber[]> {
      return this.http.get<VTuber[]>(this.apiUrl+'/vtuber');
    }
}
