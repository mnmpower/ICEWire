import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Person} from '../models/person.model';
import {Admin} from '../models/admin.model';

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

  addAdmin(admin: Admin) {
    return this.http.post<Admin>(this.baseUrl + 'admins', admin, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateAdmin(admin: Admin) {
    return this.http.put<Admin>(this.baseUrl + 'admins/' + admin.adminID, admin, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Admin>(this.baseUrl + 'admins/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAdmin(ID: number): Observable<Admin> {
    return this.http.get<Admin>(this.baseUrl + 'admins/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl + 'admins', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }











}
