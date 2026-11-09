import { Component, inject, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MaintenanceRequest } from '../../models/maintenance-request';
import { MaintenanceService } from '../../services/maintenance.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  imports: [FormsModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css',
})
export class VehicleCardComponent {
  @Input() vehicle!: Vehicle;
  protected AuthService = inject(AuthService);
  protected MaintenanceService = inject(MaintenanceService);
  protected VehicleService = inject(VehicleService);
  user = this.AuthService.getCurrentUser();
  afficherformulaire: boolean = false;
  description: string = '';
  urgency: 'LOW' | 'HIGH' = 'LOW';

  SignalerUnePanne() {
    this.afficherformulaire = true;
  }

  submitForm() {
  const request: MaintenanceRequest = {
    id_vehicule: this.vehicle.id_vehicule,
    description: this.description,
    urgency: this.urgency,
    status: 'PENDING'
  };

  this.MaintenanceService.submitMaintenanceRequest(request).subscribe({
    next: () => {
      if (this.urgency === 'HIGH' && this.vehicle.id) {
        this.VehicleService.updateStatus(
          this.vehicle.id,
          'MAINTENANCE'
        ).subscribe({
          next: () => {
            this.vehicle.status = 'MAINTENANCE';
            console.log('Véhicule mis en maintenance');
          },
          error: (err) => console.error('Erreur statut véhicule:', err)
        });
      }

      this.afficherformulaire = false;
      this.description = '';
      this.urgency = 'LOW';
    },
    error: (err) => console.error('Erreur demande:', err)
  });
}
}
