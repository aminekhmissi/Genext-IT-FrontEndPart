import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private route: Router) {}
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  logout = async () => {
    localStorage.clear();
    await this.route.navigateByUrl('/login');

    window.location.reload();

    //reset localstorage:suppression userconnect , token , state
  };
}
