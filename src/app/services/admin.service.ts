import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService
  ) {
  }

  private baseUrl = this.variablesService.getAPIBase_URL();

  getIdOfCurrentAdmin(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'admins/idcurrentadmin', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
