import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutFacadeService } from './layout.facade.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public readonly isMenuOpen$: Observable<boolean>;
  constructor(private readonly layoutService: LayoutFacadeService) {
    this.isMenuOpen$ = this.layoutService.isMenuOpen$;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.layoutService.toggleMenu();
  }
}
