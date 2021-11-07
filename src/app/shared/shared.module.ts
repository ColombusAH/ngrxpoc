import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterModule } from './components/counter/counter.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CounterModule],
  exports: [CounterModule],
})
export class SharedModule {}
