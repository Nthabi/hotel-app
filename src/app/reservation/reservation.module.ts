import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
