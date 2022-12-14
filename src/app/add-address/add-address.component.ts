import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LodgeService } from '../services/lodge.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent {
  form: FormGroup;
  submitted = false;
  id: any;
  constructor(
    private lodgeService: LodgeService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      town: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      lang: ['', Validators.required],
      at: ['', Validators.required],
    });
  }
  createAddress() {
    this.submitted = true;
    this.lodgeService.createAddress(this.form.value).subscribe((res: any) => {
      console.log(res);
      this.id = res['data']._id;
      console.log('new address _id:', res['data']._id);
      this.router.navigateByUrl('/addLodge/' + this.id);
    });
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  get f() {
    return this.form.controls;
  }
}
