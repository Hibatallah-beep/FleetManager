import { Component, inject, OnInit } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';
import { MaintenanceRequest } from '../../models/maintenance-request';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-maintenance-admin',
  imports: [],
  templateUrl: './maintenance-admin.component.html',
  styleUrl: './maintenance-admin.component.css'
})
export class MaintenanceAdminComponent implements OnInit {
  protected MaintenanceService = inject(MaintenanceService);
  protected VehicleService = inject(VehicleService);
  maintenanceRequests : MaintenanceRequest[] = [];
  ngOnInit() : void {
    this.MaintenanceService.getMaintenanceRequests().subscribe({
      next : (data)=>{
        this.maintenanceRequests = data;
      },
      error : (err) =>{
        console.log("Erreur lors de la récupération des demandes de maintenance:", err)
      }
  })
  
}
approveRequest(request: MaintenanceRequest) {
  this.MaintenanceService.updateMaintenanceRequestStatus(
    request.id!,
    'APPROVED'
  ).subscribe({
    next: () => {
      request.status = 'APPROVED';

      this.VehicleService.getVehicleByBusinessId(
        request.id_vehicule
      ).subscribe({
        next: (vehicles: any[]) => {
          const vehicle = vehicles[0];

          if (vehicle?.id) {
            this.VehicleService.updateStatus(
              vehicle.id,
              'IN_SERVICE'
            ).subscribe({
              next: () => {
                vehicle.status = 'IN_SERVICE';
                console.log('Véhicule remis en service');
              },
              error: (err) => console.error('Erreur véhicule:', err)
            });
          }
        },
        error: (err: any) => console.error('Erreur recherche véhicule:', err)
      });
    },
    error: (err) => console.error('Erreur approbation:', err)
  });
}
rejectRequest(request: MaintenanceRequest) {
  this.MaintenanceService.updateMaintenanceRequestStatus(
    request.id!,
    'REJECTED'
  ).subscribe({
    next: (data) => {
      request.status = 'REJECTED';
      console.log('Demande refusée avec succès:', data);
    },
    error: (error) => {
      console.error('Erreur lors du refus:', error);
    }
  });
}
}