import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';
import {ZoekProject} from '../models/zoek-project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getProjectsWhereShowIsTrue(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects/whereShowIsTrue');
  }

  getProject(ID: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + 'projects/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Project>(this.baseUrl + 'projects/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addProject(project: Project) {
    return this.http.post<Project>(this.baseUrl + 'projects', project, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.baseUrl + 'projects/' + project.projectID, project, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  zoek(zoekobject: ZoekProject): Observable<Project[]> {
    return this.http.post<Project[]>(this.baseUrl + 'projects/zoek', zoekobject);
  }
}
