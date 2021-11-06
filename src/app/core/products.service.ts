import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  loadProducts() {
    return this.http.get<Product[]>('http://localhost:4000/users/authenticate');
  }
}
