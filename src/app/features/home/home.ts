import { Component, LOCALE_ID } from '@angular/core';
import { ProductService } from '../../core/services/available.service';
import { Availables } from '../../core/models/available';
import { CommonModule, NgOptimizedImage, registerLocaleData } from '@angular/common';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order';
import localePt from '@angular/common/locales/pt';
import { Router } from '@angular/router';

registerLocaleData(localePt)


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports:[CommonModule,],
  styleUrls: ["./home.css"],
  providers:[{provide:LOCALE_ID,useValue:'pt-BR'}]
})
export class Home {
  products: Availables[] = [];
  order: Order [] = []
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products = this.productService.getAvailableProducts();
  }

  goToProduct(data:string){
    this.router.navigate(['/products', data])
  }
  
  
}
