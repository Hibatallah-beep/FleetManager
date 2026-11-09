export interface User {
    id_user : number,
    nom : string,
    email : string,
    role : 'COLLAB' | 'MANAGER',
}
