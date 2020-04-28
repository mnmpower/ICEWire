import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesService} from '../shared/variables.service';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = this.variablesService.getAPIBase_URL();


  constructor(
    private http: HttpClient,
    private variablesService: VariablesService) {
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(this.baseUrl + 'categories/' + category.categoryID, category, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addCategory(category: Category) {
    return this.http.post<Category>(this.baseUrl + 'categories', category, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  delete(ID: number) {
    return this.http.delete<Category>(this.baseUrl + 'categories/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCategory(ID: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + 'categories/' + ID, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
}
