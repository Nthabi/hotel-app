import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() { }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string) {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
  }

  updateReservation(reservation: Reservation) {
    let index = this.reservations.findIndex(res => res.id === reservation.id);
    this.reservations[index] = reservation;
  }
}
