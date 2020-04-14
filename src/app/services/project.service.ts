import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private variablesService: VariablesService) {
  }

  private baseUrl = this.variablesService.getAPIBase_URL();

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects',
      {headers: new HttpHeaders().set('Access-Control-Allow-Origin', 'origin-list')}
    );
  }
}
