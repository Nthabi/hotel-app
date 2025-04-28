import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';



@NgModule({
  declarations: [
    ReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
