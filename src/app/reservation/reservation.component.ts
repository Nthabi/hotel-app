import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from './reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
 

  //formgroup we will bind to our form
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })


  }

  onSubmit() {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      this.reservationService.addReservation(reservation);
      this.router.navigate(['/list']);
  
    } else {
      console.log('Invalid');
    }
  }
}
