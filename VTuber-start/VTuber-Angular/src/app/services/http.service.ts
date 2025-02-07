import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { VTuberResponse } from '../models/vtuberResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

    // Fetch all VTubers
    getVTubers(): Observable<VTuberResponse> {
      return this.http.get<VTuberResponse>(this.apiUrl + '/vtuber');
    }
}
