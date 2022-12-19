import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  token = localStorage.getItem('token')!;
  headersoption = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
  });
  constructor(private http: HttpClient) {}
  createReservation(request: any) {
    return this.http.post(
      `${environment.baseurl}Reservation/createReservation`,
      request
    );
  }
  // createReservation(request: any) {
  //   return this.http.post(
  //     `${environment.baseurl}Reservation/createReservation`,{headers:this.headersoption}
  //     request
  //   );
  // }
}
