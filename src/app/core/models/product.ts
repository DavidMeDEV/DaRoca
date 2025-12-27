export interface Product{
    id:string;
    name:string;
    price:number;
    unit:'Kg'|'Unidade';
    available: number;
    produtorId: string;
    active:boolean;
    photo: string[]
}