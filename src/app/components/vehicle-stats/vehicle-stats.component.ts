import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-stats',
  imports: [],
  templateUrl: './vehicle-stats.component.html',
  styleUrl: './vehicle-stats.component.css'
})
export class VehicleStatsComponent {
  @Input() TotalVehicles!: number;
  @Input() availableVehicles!: number;
  @Input() inServiceVehicles!: number;
  @Input() maintenanceVehicles!: number;
}
