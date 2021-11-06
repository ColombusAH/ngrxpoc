import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { fakeBackendProvider } from '../interceptors/fake-backend.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductsService, fakeBackendProvider],
})
export class CoreModule {}
