import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types';
import { ProductsFacadeService } from './product.facade.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private readonly productService: ProductsFacadeService) {
    this.products$ = this.productService.products$;
  }

  ngOnInit(): void {
    this.productService.loadAllProducts();
  }
}
