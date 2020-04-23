import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {Status} from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  updateStatus(status: Status) {
    return this.http.put<Status>(this.baseUrl + 'status/' + status.statusID, status, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addStatus(status: Status) {
    return this.http.post<Status>(this.baseUrl + 'status', status, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Status>(this.baseUrl + 'status/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getStatus(ID: number): Observable<Status> {
    return this.http.get<Status>(this.baseUrl + 'status/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getStatusen(): Observable<Status[]> {
    return this.http.get<Status[]>(this.baseUrl + 'status', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
