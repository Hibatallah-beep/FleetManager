import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaintenanceRequest } from '../models/maintenance-request';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http : HttpClient) { }

  submitMaintenanceRequest(request: MaintenanceRequest) {
    return this.http.post('http://localhost:3000/maintenanceRequests', request);
  }

  getMaintenanceRequests() {
    return this.http.get<MaintenanceRequest[]>('http://localhost:3000/maintenanceRequests');
}

  updateMaintenanceRequestStatus(id: number, status: 'APPROVED' | 'REJECTED') {
    return this.http.patch(`http://localhost:3000/maintenanceRequests/${id}`, { status });
  }
}
