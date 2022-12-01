import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup;
  fileToUpload: Array<File> = [];
  submitted = false;

  constructor(
    private register: AuthenticationService,
    private formbuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      cin: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files; //target:event en ts <-> event on html
    console.log(this.fileToUpload);
  }
  onSubmit(): void {
    this.submitted = true;
    let formdata = new FormData();
    formdata.append('email', this.form.value.email);
    formdata.append('password', this.form.value.password);
    formdata.append('fullname', this.form.value.fullname);
    formdata.append('city', this.form.value.city);
    formdata.append('address', this.form.value.address);
    formdata.append('cin', this.form.value.cin);
    formdata.append('phone', this.form.value.phone);

    formdata.append('photo', this.fileToUpload[0]);
    //display form values on success
    this.register.register(formdata).subscribe((res: any) => {
      console.log(res);
      Swal.fire('register successfully!');
    });
  }
  get f() {
    return this.form.controls;
    //tester le formulaire
  }
}
