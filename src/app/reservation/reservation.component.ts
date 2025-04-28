import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from './reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
 

  //formgroup we will bind to our form
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService,
    private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      let reservation = this.reservationService.getReservation(id);

      if(reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if(id) {
        this.reservationForm.patchValue(reservation);
        this.reservationService.updateReservation(id, reservation);
        this.router.navigate(['/list']);
      } else {
        this.reservationService.addReservation(reservation);
        this.router.navigate(['/list']);
      }
    } else {
      console.log('Invalid');
    }
  }
}
