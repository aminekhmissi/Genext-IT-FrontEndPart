import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DateRangeType, IgxCalendarBaseDirective } from 'igniteui-angular';
import { ModalserviceService } from '../modalservice.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent {
  @ViewChild('calendar', { static: true })
  public calendar: IgxCalendarBaseDirective;
  @Input() message: any;
  @Output() dataEvent = new EventEmitter<string>();
  data: string = 'this data was passed from child to parent';
  public today = new Date(Date.now());
  public range = [
    new Date(this.today.getFullYear(), this.today.getMonth(), 3),
    new Date(this.today.getFullYear(), this.today.getMonth(), 8),
  ];
  constructor(public modalService: ModalserviceService) {}
  public ngOnInit(): void {
    this.calendar.disabledDates = [
      {
        type: DateRangeType.Between,
        dateRange: [
          new Date(this.message.disableList[0]),
          new Date(
            this.message.disableList[this.message.disableList.length - 1]
          ),
        ],
      },
      {
        type: DateRangeType.Between,
        dateRange: this.range,
      },
    ];
    console.log('range:', this.range);
    console.log('message:', this.message.reservedList[0].checkedIn);
  }
  sendData() {
    this.dataEvent.emit(this.data);
  }
}
