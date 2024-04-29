import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Promotion } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Promotion[]> {
    return this.httpClient.get<Promotion[]>(`${this.apiUrl}/promocoes`);
  }
}
