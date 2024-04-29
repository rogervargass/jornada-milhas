import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/type';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode<User>(token);
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
