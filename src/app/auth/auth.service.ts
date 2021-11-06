import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCreds } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(creds: UserCreds) {
    return this.http.post<User>('http://localhost:4000/users/authenticate', creds);
  }
}
