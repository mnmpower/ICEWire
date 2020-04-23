import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Initiatif} from '../models/initiatif.model';
import {VariablesService} from '../shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class InitiatifService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  addInitiatif(initiatif: Initiatif) {
    return this.http.post<Initiatif>(this.baseUrl + 'initiatifs', initiatif);
  }

  updateInitiatif(initiatif: Initiatif) {
    return this.http.put<Initiatif>(this.baseUrl + 'initiatifs/' + initiatif.initiatifID, initiatif, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Initiatif>(this.baseUrl + 'initiatifs/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getInitiatif(initiatifID: number): Observable<Initiatif> {
    return this.http.get<Initiatif>(this.baseUrl + 'initiatifs/' + initiatifID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });

  }

  getInitiatifs(): Observable<Initiatif[]> {
    return this.http.get<Initiatif[]>(this.baseUrl + 'initiatifs', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }







}
