import { Injectable } from '@angular/core';
import { Order, OrderStatus } from '../models/order';
import { OrderItems } from '../models/order-items';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private items: OrderItems[] = [];

  createOrder(clienteId: string, produtorId: string): Order {
    const order: Order = {
      id: crypto.randomUUID(),
      clienteId,
      produtorId,
      status: 'pendente',
      createdAt: new Date(),
    };

    this.orders.push(order);
    return order;
  }

  addItem(
    orderId: string,
    item: OrderItems
  ): void {
    this.items.push({ ...item, orderId });
  }
  

  updateStatus(
    orderId: string,
    status: OrderStatus
  ): void {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = status;
  }
  
}
