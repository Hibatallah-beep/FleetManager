import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) { }

  getVehicles(){
    return this.http.get<Vehicle[]>('http://localhost:3000/vehicles');
  }
  
  updateStatus(id: string, status: 'AVAILABLE' | 'IN_SERVICE' | 'MAINTENANCE') {
  return this.http.patch(
    `http://localhost:3000/vehicles/${id}`,
    { status }
  );
}
getVehicleByBusinessId(id_vehicule: number) {
  return this.http.get<Vehicle[]>(
    `http://localhost:3000/vehicles?id_vehicule=${id_vehicule}`
  );
}
}
