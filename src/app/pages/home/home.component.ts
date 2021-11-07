import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/types';
import { HomeFacadeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public readonly isLoggedIn$: Observable<boolean>;
  constructor(private readonly homeService: HomeFacadeService) {
    this.isLoggedIn$ = this.homeService.isLoggedIn$;
  }

  ngOnInit(): void {}
  login() {
    this.homeService.login();
  }
}
