import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LodgeService } from '../services/lodge.service';
import { ModalserviceService } from '../shared/modalservice.service';
import { ReservationModalComponent } from '../shared/reservation-modal/reservation-modal.component';

@Component({
  selector: 'app-detaillodge',
  templateUrl: './detaillodge.component.html',
  styleUrls: ['./detaillodge.component.scss'],
})
export class DetaillodgeComponent {
  currentMessage: any;
  id = this.activatedroute.snapshot.params['id'];
  lodge: any;
  similarLodges: any;
  closeResult = '';
  data: string = '';
  constructor(
    public modalService: ModalserviceService,
    private lodgeService: LodgeService,
    private activatedroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getLodgeById();
    console.log('id:', this.id);
  }
  getLodgeById() {
    this.lodgeService.getLodgeById(this.id).subscribe((res: any) => {
      this.lodge = res['data'];
      this.similarLodges = res['listLodges'];
      console.log('lodge by id:', this.lodge);
      console.log('similarLodges:', this.similarLodges);
      this.currentMessage = this.lodge;
    });
  }
  receiveData(data: string) {
    this.data = data;
  }
}
