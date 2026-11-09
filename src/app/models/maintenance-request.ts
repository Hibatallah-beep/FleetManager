export interface MaintenanceRequest {
    id? : number,
    id_vehicule : number,
    description : string,
    urgency : 'LOW' | 'HIGH',
    status :'PENDING'| 'APPROVED' | 'REJECTED'
}
