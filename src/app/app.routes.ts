import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { LoginComponent } from './components/login/login.component';
import { MaintenanceAdminComponent } from './components/maintenance-admin/maintenance-admin.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { authGuard } from './guards/auth.guard';
import { managerGuard } from './guards/manager.guard';

export const routes: Routes = [
    {path :'login' ,  component : LoginComponent},
    {path : 'vehicles', component : VehicleListComponent , canActivate : [authGuard]},
    {path : 'admin/maintenance', component : MaintenanceAdminComponent ,canActivate : [authGuard , managerGuard]},
    {path : 'forbidden' , component : ForbiddenComponent},
    { path: '**', redirectTo: 'login' }

];
