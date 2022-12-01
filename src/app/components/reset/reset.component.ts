import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent {
  form: FormGroup;
  constructor(
    private activeroute: ActivatedRoute,
    private reset: AuthenticationService,
    private formBuil: FormBuilder,
    private route: Router
  ) {}
  token = this.activeroute.snapshot.params['token'];
  ngOnInit(): void {
    this.form = this.formBuil.group({
      password: ['', Validators.required],
    });
  }

  resetPassword() {
    this.reset
      .resetPassword(this.form.value, this.token.value)
      .subscribe((res: any) => {
        console.log('hello2');
        Swal.fire('Password has been changed successfully!');
      });
  }
}
