import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.submitted = true;
    this.auth.login(this.form.value).subscribe(
      async (res: any) => {
        console.log('logged in', res);
        if (res.message === 'logged') {
          localStorage.setItem('userconnect', JSON.stringify(res.user));
          localStorage.setItem('token', res.token);
          localStorage.setItem('refreshtoken', res.refreshtoken);
          localStorage.setItem('state', '0');
          await this.route.navigateByUrl('/');
          location.reload();
        }
      },

      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'user not found',
          text: 'email invalid',
          footer: 'password invalid',
        });
        console.log(err);
      }
    );
  }
}
