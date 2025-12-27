import { Component, LOCALE_ID} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product.service';
import { Produtor } from '../../core/models/produtor';
import { Farmer } from '../../core/services/farmer.service';
import { CurrencyPipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)

interface CProd extends Product{
  prodName?:string
}


@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers:[{
    provide:LOCALE_ID, useValue: 'pt-BR'
  }]
})
export class Products {
  productName!:string;
  produtos: CProd[] = []
  produtor: Produtor[]
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private farmerdata:  Farmer
  ){
    this.productName = this.route.snapshot.paramMap.get('data')!
    this.produtos = this.productService.getSpecifiedProd(this.productName)
    this.produtor = this.farmerdata.getProdutor()
    this. produtos = this.produtos.map(produto => {
      const producerFind = this.produtor.find(prod=>prod.userId===produto.produtorId)
      return{
        ...produto, prodName: producerFind?.farmerName
      }
    })
  }

/* a disposição do produto vai ser verificada com o vendedor semanalmente e vai solicitar fotos novas */
}
