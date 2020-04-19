import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../models/user-login.model';
import {Admin} from '../models/admin.model';
import {AdminService} from './admin.service';
import {VariablesService} from '../shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isLoggedin = new BehaviorSubject(localStorage.getItem('token') ? true : false);

  constructor(
    private httpClient: HttpClient,
    private adminService: AdminService,
    private variablesService: VariablesService
  ) {
  }

  private baseUrl = this.variablesService.getAPIBase_URL();

  authenticateAdmin(userLogin: UserLogin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.baseUrl + 'admins/authenticate', userLogin
      );
  }

  isLogged() {
    return this.adminService.getIdOfCurrentAdmin();
  }
}
