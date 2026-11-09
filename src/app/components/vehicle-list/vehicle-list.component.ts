
import { Component, inject, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { VehicleStatsComponent } from '../vehicle-stats/vehicle-stats.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-list',
  imports: [VehicleCardComponent, VehicleStatsComponent, FormsModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent implements OnInit {

  protected vehicleService = inject(VehicleService);

  Vehicles: Vehicle[] = [];
  TotalVehicles: number = 0;
  availableVehicles: number = 0;
  inServiceVehicles: number = 0;
  maintenanceVehicles: number = 0;
  searchText: string = '';

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => {
        this.Vehicles = data;
        this.updateStatistics();
      },
      error: (error) => {
        console.error('Error fetching vehicles:', error);
      },
    });
  }

  updateStatistics(): void {
    this.TotalVehicles = this.Vehicles.length;

    this.availableVehicles = this.Vehicles.filter(
      vehicle => vehicle.status === 'AVAILABLE'
    ).length;

    this.inServiceVehicles = this.Vehicles.filter(
      vehicle => vehicle.status === 'IN_SERVICE'
    ).length;

    this.maintenanceVehicles = this.Vehicles.filter(
      vehicle => vehicle.status === 'MAINTENANCE'
    ).length;
  }

  getFilteredVehicles(): Vehicle[] {
    return this.Vehicles.filter(
      vehicle =>
        vehicle.model.toLowerCase().includes(this.searchText.toLowerCase()) ||
        vehicle.immatriculation.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
