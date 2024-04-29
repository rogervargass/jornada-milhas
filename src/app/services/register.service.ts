import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    console.log(user);
    return this.httpClient.post<User>(`${this.apiUrl}/auth/cadastro`, user);
  }
}
