import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: crypto.randomUUID(),
      name: 'Alface Crespa',
      price: 3,
      unit: 'Unidade',
      available: 20,
      produtorId: 'f1',
      active: true,
      photo: ['assets/alface.png', 'assets/alface2.jpg']
      
    },
    {
      id: crypto.randomUUID(),
      name: 'Tomate',
      price: 6,
      unit: 'Kg',
      available: 15,
      produtorId: 'f1',
      active: true,
      photo:['assets/tomate.png']
    },
        {
      id: crypto.randomUUID(),
      name: 'Pequi',
      price: 10,
      unit: 'Kg',
      available: 100,
      produtorId: 'f1',
      active: true,
      photo:['assets/pqui.png']
    },
        {
      id: crypto.randomUUID(),
      name: 'Abóbora',
      price: 10,
      unit: 'Kg',
      available: 100,
      produtorId: 'f1',
      active: true,
      photo:['assets/abroba.png']
    },
      {
      id: crypto.randomUUID(),
      name: 'Alface Crespa',
      price: 3,
      unit: 'Unidade',
      available: 20,
      produtorId: 'f2',
      active: true,
      photo: ['assets/alface.png']
      
    },
      {
      id: crypto.randomUUID(),
      name: 'Tomate',
      price: 3,
      unit: 'Unidade',
      available: 20,
      produtorId: 'f3',
      active: true,
      photo: ['assets/tomate.png']
      
    },
    
      
  ];

  getSpecifiedProd(name:string):Product[]{
    return this.products.filter(
      produto=> produto.active && produto.available> 0 && produto.name === name
    )
  }
}
