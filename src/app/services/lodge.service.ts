import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LodgeService {
  constructor(private http: HttpClient) {}
  getAllLodges() {
    return this.http.get(`${environment.baseurl}lodge/lodges`);
  }
}
