import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../services/category.service';
import { LodgeService } from '../services/lodge.service';

@Component({
  selector: 'app-add-lodge',
  templateUrl: './add-lodge.component.html',
  styleUrls: ['./add-lodge.component.scss'],
})
export class AddLodgeComponent {
  form: FormGroup;
  myFiles: string[] = [];
  submitted = false;
  listCategories: any;
  listEquipements: any;
  listPlaces: any;
  listFeatures: any;
  myEquipements: any[] = [];
  myFeatures: any[] = [];
  id = this.activatedroute.snapshot.params['id'];
  constructor(
    private formbuilder: FormBuilder,
    private lodgeService: LodgeService,
    private categoryService: CategoryService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      rooms: ['', Validators.required],
      place: ['', Validators.required],
      category: ['', Validators.required],
      // owner: ['', Validators.required],
      adress: ['', Validators.required],
      dateDebut: ['', Validators.required],
      datefin: ['', Validators.required],
      area: ['', Validators.required],
      description: ['', Validators.required],
      nbGarage: ['', Validators.required],
      nbPerson: ['', Validators.required],
      features: this.formbuilder.array(['', Validators.required]),
      equipments: this.formbuilder.array(['', Validators.required]),
    });

    this.getAllCategories();
    this.getAllEquipements();
    this.getAllFeatures();
    this.getAllPlaces();
  }
  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
  }
  pushToMyEquipements(eq: any) {
    const newEq = JSON.parse(JSON.stringify(eq));
    this.myEquipements.push(newEq._id);
    console.log('my equipements:', this.myEquipements);
  }
  pushToMyFeatures(fea: any) {
    const newFeature = JSON.parse(JSON.stringify(fea));
    this.myFeatures.push(newFeature._id);
    console.log('my features:', this.myFeatures);
  }
  onSubmit(): void {
    this.form.patchValue({
      equipments: this.myEquipements,
      features: this.myFeatures,
      adress: this.id,
    });
    let formdata = new FormData();
    formdata.append('title', this.form.value.title);
    formdata.append('price', this.form.value.price);
    formdata.append('rooms', this.form.value.rooms);
    formdata.append('place', this.form.value.place);
    formdata.append('category', this.form.value.category);
    formdata.append('area', this.form.value.area);
    formdata.append('description', this.form.value.description);
    formdata.append('nbGarage', this.form.value.nbGarage);
    formdata.append('nbPerson', this.form.value.nbPerson);
    //  formdata.append('owner', this.form.value.owner);
    formdata.append('adress', this.form.value.adress);
    formdata.append('dateDebut', this.form.value.dateDebut);
    formdata.append('datefin', this.form.value.datefin);
    for (var i = 0; i < this.myFeatures.length; i++) {
      formdata.append('features', this.myFeatures[i]);
    }
    for (var i = 0; i < this.myEquipements.length; i++) {
      formdata.append('equipments', this.myEquipements[i]);
    }

    //files
    for (var i = 0; i < this.myFiles.length; i++) {
      formdata.append('photos', this.myFiles[i]);
    }
    this.submitted = true;

    this.lodgeService.addLodge(formdata).subscribe((res: any) => {
      console.log(res);
      console.log('newlodge id :', res['data']._id);
      Swal.fire('Lodge created!! waiting confirmation by Administrator');
      this.router.navigateByUrl('/');
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  get f() {
    return this.form.controls;
  }
  getAllPlaces() {
    this.categoryService.getAllPlaces().subscribe((res: any) => {
      this.listPlaces = res['data'];
      console.log('list places:', this.listPlaces);
    });
  }
  getAllEquipements() {
    this.categoryService.getAllEquipements().subscribe((res: any) => {
      this.listEquipements = res['data'];
      console.log('list equipements:', this.listEquipements);
    });
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.listCategories = res['data'];
      console.log('list categories:', this.listCategories);
    });
  }
  getAllFeatures() {
    this.categoryService.getAllFeatures().subscribe((res: any) => {
      this.listFeatures = res['data'];
      console.log('list features:', this.listFeatures);
    });
  }
}
