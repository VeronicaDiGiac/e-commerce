import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { productsData } from '../../models/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private baseUrl = `https://my-e-commerce-f5789-default-rtdb.firebaseio.com/`;
  constructor(private http: HttpClient) {}

  getProductsData(): Observable<productsData[]> {
    const manProductsUrl = `${this.baseUrl}Products/man-products.json`;
    const womanProductsUrl = `${this.baseUrl}Products/woman-products.json`;

    return forkJoin({
      manProducts: this.http.get<productsData[]>(manProductsUrl),
      womanProducts: this.http.get<productsData[]>(womanProductsUrl),
    }).pipe(
      map(({ manProducts, womanProducts }) => {
        return [...manProducts, ...womanProducts];
      })
    );
  }
}

//     const apiProductsUrl = `https://my-e-commerce-f5789-default-rtdb.firebaseio.com/Products/woman-products.json

// `;
// return this.http.get<productsData[]>(apiProductsUrl)
