import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
 

  //formgroup we will bind to our form
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

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
      console.log('valid');
    } else {
      console.log('Invalid');
    }
  }
}
