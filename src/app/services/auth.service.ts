import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../types/type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpCliente: HttpClient,
    private userService: UserService
  ) {}

  login(
    email: string,
    password: string
  ): Observable<HttpResponse<AuthResponse>> {
    const body = { email, senha: password };
    return this.httpCliente
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, body, {
        observe: 'response',
      })
      .pipe(
        tap((res) => {
          const authToken = res.body?.access_token || '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
