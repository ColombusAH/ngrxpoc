import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayoutFacadeService } from './layout.facade.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor(private readonly layoutService: LayoutFacadeService) {}

  ngOnInit(): void {}
}
