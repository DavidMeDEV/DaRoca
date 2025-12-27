import { Injectable } from '@angular/core';
import { Produtor } from '../models/produtor';

@Injectable({
  providedIn: 'root',
})
export class Farmer {
  private produtor: Produtor[] = [
    {
    id: 'u1',
    userId:"f1",
    farmerName: 'João Agricultor',
    location:'50 biz'
    },
    {
    id: 'u2',
    userId:"f2",
    farmerName: 'Nelsin das Galinhas',
    location:'50 biz'
    },
    {
    id: 'u2',
    userId:"f3",
    farmerName: 'Poof dos quiabo',
    location:'50 biz'
    },
  ]

  getProdutor(): Produtor[]{
    return this.produtor.filter(produtor=> produtor.farmerName)
  }

}
