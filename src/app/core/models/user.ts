export type UserType = 'Produtor'|'Cliente'

export interface User{
    id:string;
    name:string;
    email:string;
    role:UserType
}