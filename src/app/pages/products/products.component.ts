import { Component, OnInit } from '@angular/core';
import { ProductsFacadeService } from './product.facade.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productService: ProductsFacadeService) {}

  ngOnInit(): void {
    this.productService.loadAllProducts();
  }
}
