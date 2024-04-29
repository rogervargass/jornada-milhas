import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { StateUnit } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<StateUnit[]>;

  constructor(private httpClient: HttpClient) {}

  listStates(): Observable<StateUnit[]> {
    if (!this.cache$) {
      this.cache$ = this.getStatesFromAPI().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private getStatesFromAPI(): Observable<StateUnit[]> {
    return this.httpClient.get<StateUnit[]>(`${this.apiUrl}/estados`);
  }
}
