import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Person} from '../models/person.model';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + 'people', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getPersonsWhereDiy(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + 'people/diy');
  }

  updatePerson(person: Person) {
    return this.http.put<Person>(this.baseUrl + 'people/' + person.personID, person, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addPerson(person: Person) {
    return this.http.post<Person>(this.baseUrl + 'people', person);
  }

  delete(ID: number) {
    return this.http.delete<Person>(this.baseUrl + 'people/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getPerson(ID: number): Observable<Person> {
    return this.http.get<Person>(this.baseUrl + 'people/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }






}
