import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  removeToken() {
    localStorage.removeItem(KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
