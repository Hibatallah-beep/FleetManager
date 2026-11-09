export interface Vehicle {
  id_vehicule: number;
  id?: string;
  model: string;
  immatriculation: string;
  status: 'AVAILABLE' | 'IN_SERVICE' | 'MAINTENANCE';
  lastServiceDate: string;
}