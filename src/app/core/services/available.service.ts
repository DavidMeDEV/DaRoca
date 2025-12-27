import { Injectable } from '@angular/core';
import {Availables} from '../models/available'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Availables[] = [
    {
      prodId: '1',
      name: 'Alface Crespa',
      available:true,
      photo: 'assets/alface.png'
    },
    {
      prodId: '2',
      name: 'Tomate',
      available:true,
      photo:'assets/tomate.png'
    },
    {
      prodId: '3',
      name: 'Pequi',
      available:true,
      photo:'assets/pqui.png'
    },
    {
      prodId: '4',
      name: 'Abóbora',
      available:true,
      photo:'assets/abroba.png'
    },
      
  ];

  getAvailableProducts(): Availables[] {
     const seenIds = new Set<string>();

  return this.products.filter(product => {
    if (!product.available || !product.prodId) return false;

    if (seenIds.has(product.prodId)) return false;

    seenIds.add(product.prodId);
    return true;
  });
}
}
