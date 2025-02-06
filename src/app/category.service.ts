import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrlCat: string="http://localhost:3000/categories";

constructor(private http:HttpClient) {
  

 }

 getListCategoriesFromBackend(): Observable<Categorie[]>{

  return this.http.get<Categorie[]>(this.apiUrlCat); 
}

deleteCategoryFromBackend (category: Categorie): Observable<Categorie> {
  
  return this.http.delete<Categorie>(this.apiUrlCat +'/'+category.id);
  }

  addCategory(category: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrlCat,category);}

    getCategoryById(id: number): Observable<Categorie> {
      return this.http.get<Categorie>(`${this.apiUrlCat}/${id}`);
    }


    updateCategory(category: Categorie): Observable<Categorie> {
      return this.http.put<Categorie>(`${this.apiUrlCat}/${category.id}`, category);
    }
}
