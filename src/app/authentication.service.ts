import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`http://localhost:3500/registerCustomer`, user);
  }
  login(user: any) {
    return this.http.post(`http://localhost:35000/login`, user);
  }
  logout(user: any) {
    return this.http.post(`http://localhost:35000/logout`, user);
  }
  forgotPassord(user: any) {
    return this.http.post(`http://localhost:35000/forgetPassword`, user);
  }
  resetPassword(token: any, user: any) {
    return this.http.post(`http://localhost:35000/resetPassword/${token}`, user);
  }
}
