import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , VehicleListComponent ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  AuthService = inject(AuthService);
  get nomUtilisateur(): string {
    return this.AuthService.getCurrentUser().nom;
  }

  get roleUtilisateur(): string {
    return this.AuthService.getCurrentUser().role;
  }
}