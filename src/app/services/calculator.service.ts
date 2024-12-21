import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calculator } from '../common/calculator';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private apiUrl = 'http://localhost:8080/offer-list'; 

  constructor(private httpClient: HttpClient) {}

  getOfferList(): Observable<Calculator[]> {
    return this.httpClient.get<GetResponse>(this.apiUrl).pipe(
      map(response => response._embedded.calculator)
    );
  }
}

interface GetResponse {
  _embedded: {
    calculator: Calculator[];
  }
}
