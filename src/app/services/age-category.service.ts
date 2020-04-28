import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {AgeCategory} from '../models/age-category.model';

@Injectable({
  providedIn: 'root'
})
export class AgeCategoryService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  getAgeCategories(): Observable<AgeCategory[]> {
    return this.http.get<AgeCategory[]>(this.baseUrl + 'AgeCategories');
  }


  updateAgeCategory(ageCategory: AgeCategory) {
    return this.http.put<AgeCategory>(this.baseUrl + 'AgeCategories/' + ageCategory.ageCategoryID, ageCategory, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addAgeCategory(ageCategory: AgeCategory) {
    return this.http.post<AgeCategory>(this.baseUrl + 'AgeCategories', ageCategory, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<AgeCategory>(this.baseUrl + 'AgeCategories/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAgeCategory(ageCategoryID: number): Observable<AgeCategory> {
    return this.http.get<AgeCategory>(this.baseUrl + 'AgeCategories/' + ageCategoryID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
