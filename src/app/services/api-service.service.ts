import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsData } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUrl = `https://my-e-commerce-f5789-default-rtdb.firebaseio.com/`;
  constructor(readonly http: HttpClient) {}

  getManProducts(): Observable<productsData[]> {
    const manProductsUrl = `${this.baseUrl}Products/man-products.json`;
    return this.http.get<productsData[]>(manProductsUrl);
  }

  getWomanProducts(): Observable<productsData[]> {
    const womanProductsUrl = `${this.baseUrl}Products/woman-products.json`;
    return this.http.get<productsData[]>(womanProductsUrl);
  }
}

//     const apiProductsUrl = `https://my-e-commerce-f5789-default-rtdb.firebaseio.com/Products/woman-products.json

// `;
// return this.http.get<productsData[]>(apiProductsUrl)
