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
  getLodgeById(id: any) {
    return this.http.get(`${environment.baseurl}lodge/getById/${id}`);
  }
  addLodge(lodge: any) {
    return this.http.post(`${environment.baseurl}lodge/addLodge`, lodge);
  }
  createAddress(address: any) {
    return this.http.post(`${environment.baseurl}adress/Addadress`, address);
  }
}
