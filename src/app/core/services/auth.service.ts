import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = {
    id: 'u1',
    name: 'João Agricultor',
    email: 'joao@daroca.com',
    role: 'Produtor',
  };

  getUser(): User | null {
    return this.currentUser;
  }

  isFarmer(): boolean {
    return this.currentUser?.role === 'Produtor';
  }

  isConsumer(): boolean {
    return this.currentUser?.role === 'Cliente';
  }
}
