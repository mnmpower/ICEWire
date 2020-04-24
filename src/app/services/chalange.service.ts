import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Status} from '../models/status.model';
import {Observable} from 'rxjs';
import {Chalange} from '../models/chalange.model';

@Injectable({
  providedIn: 'root'
})
export class ChalangeService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  updateChalange(chalange: Chalange) {
    return this.http.put<Chalange>(this.baseUrl + 'chalanges/' + chalange.chalangeID, chalange, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addChalange(chalange: Chalange) {
    return this.http.post<Chalange>(this.baseUrl + 'chalanges', chalange, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Chalange>(this.baseUrl + 'chalanges/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getChalange(ID: number): Observable<Chalange> {
    return this.http.get<Chalange>(this.baseUrl + 'chalanges/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getChalanges(): Observable<Chalange[]> {
    return this.http.get<Chalange[]>(this.baseUrl + 'chalanges', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getActiveChalange(): Observable<Chalange> {
    return this.http.get<Chalange>(this.baseUrl + 'chalanges/active');
  }
}
