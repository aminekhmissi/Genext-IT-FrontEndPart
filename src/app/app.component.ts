import { Component } from '@angular/core';
import { ModalserviceService } from './shared/modalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Genext_Client_Part';
  constructor(public modalService: ModalserviceService) {}
}
