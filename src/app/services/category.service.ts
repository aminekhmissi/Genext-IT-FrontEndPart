import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getAllCategories() {
    return this.http.get(`${environment.baseurl}category/getAllCategories`);
  }
  getAllPlaces() {
    return this.http.get(`${environment.baseurl}place/getAllPlaces`);
  }
  getAllEquipements() {
    return this.http.get(`${environment.baseurl}eq/get`);
  }
  getAllFeatures() {
    return this.http.get(`${environment.baseurl}feature/getall`);
  }
}
