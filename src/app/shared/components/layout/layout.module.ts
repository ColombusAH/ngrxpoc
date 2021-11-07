import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutFacadeService } from './layout.facade.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule],
  providers: [LayoutFacadeService],
  exports: [LayoutComponent],
})
export class LayoutModule {}
