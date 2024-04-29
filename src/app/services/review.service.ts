import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Review } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.apiUrl}/depoimentos`);
  }
}
