import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent {
  form: FormGroup;
  email: any;
  constructor(
    private formbiulder: FormBuilder,
    private auth: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.form = this.formbiulder.group({
      email: ['', Validators.required],
    });
  }
  forgotPassword() {
    this.auth.forgotPassord(this.form.value).subscribe((res: any) => {
      this.email = res;
      Swal.fire('please check your email to reset your password');
      console.log(res);
    });
  }
}
