import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateRangeType, IgxCalendarBaseDirective } from 'igniteui-angular';
import { ReservationService } from 'src/app/services/reservation.service';
import Swal from 'sweetalert2';
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
  form: FormGroup;
  public today = new Date(Date.now());
  public range = [
    new Date(this.today.getFullYear(), this.today.getMonth(), 3),
    new Date(this.today.getFullYear(), this.today.getMonth(), 8),
  ];
  arrayTest: Date[] = [];
  constructor(
    public modalService: ModalserviceService,
    private reservationService: ReservationService,
    private formbuilder: FormBuilder
  ) {}
  public ngOnInit(): void {
    // this.calendar.disabledDates = [
    //   {
    //     type: DateRangeType.Between,
    //     dateRange: [
    //       new Date(this.message.disableList[0]),
    //       new Date(
    //         this.message.disableList[this.message.disableList.length - 1]
    //       ),
    //     ],
    //   },
    // ];
    this.PropertyDisableDates();
    console.log('range:', this.range);
    console.log('message:', this.message);
    this.form = this.formbuilder.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      lodge: ['', Validators.required],
      customer: ['', Validators.required],
    });
  }
  onSelection(dates: Date | Date[]) {
    dates = dates as Date[];
    this.arrayTest = dates;
    console.log('dates selected:', dates);
    console.log('arrayTest selected:', this.arrayTest);
    console.log('checkin selected:', this.convertUTCDateToLocalDate(dates[0]));
    console.log(
      'checkout selected:',
      this.convertUTCDateToLocalDate(dates[dates.length - 1])
    );
    console.log('timezone:', dates[0].getTimezoneOffset());
  }
  sendData() {
    this.dataEvent.emit(this.data);
  }
  createReservation() {
    this.form.patchValue({
      checkIn: this.convertUTCDateToLocalDate(this.arrayTest[0]),
      checkOut: this.convertUTCDateToLocalDate(
        this.arrayTest[this.arrayTest.length - 1]
      ),
      lodge: this.message._id,
      customer: '63736b8c3bfbe681eed8f461',
    });
    this.reservationService
      .createReservation(this.form.value)
      .subscribe((res: any) => {
        console.log(res);
        this.modalService.showModal = false;
        Swal.fire('' + res['message']);
        window.location.href =
          'http://localhost:4200/detaillodge/' + this.message._id;
      });
  }
  convertUTCDateToLocalDate(date: Date) {
    var newDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  }
  PropertyDisableDates() {
    var array: any = [];
    this.message.reservedList.forEach((element: any) => {
      var daterange = {
        type: DateRangeType.Between,
        dateRange: [new Date(element.checkedIn), new Date(element.checkedOut)],
      };
      array.push(daterange);
    });
    this.calendar.disabledDates = array;
    // this.calendar.selectDate=this.message.disableList
  }
}
