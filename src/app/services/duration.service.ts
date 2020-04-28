import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {Duration} from '../models/duration.model';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DurationService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  getDurations(): Observable<Duration[]> {
    return this.http.get<Duration[]>(this.baseUrl + 'Durations');
  }

  updateDuration(duration: Duration) {
    return this.http.put<Duration>(this.baseUrl + 'Durations/' + duration.durationID, duration, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addDuration(duration: Duration) {
    return this.http.post<Duration>(this.baseUrl + 'Durations', duration, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Duration>(this.baseUrl + 'Durations/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getDuration(durationID: number): Observable<Duration> {
    return this.http.get<Duration>(this.baseUrl + 'Durations/' + durationID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
