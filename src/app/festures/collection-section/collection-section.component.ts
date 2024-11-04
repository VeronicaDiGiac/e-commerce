import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { productsData } from '../../../models/interfaces';
import CardComponent from '../card/card.component';
import { CommonModule, NgFor } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-collection-section',
  standalone: true,
  imports: [CommonModule, NgFor, CardComponent],
  template: `
    <div [ngClass]="customClasses">
      <ng-container *ngFor="let product of productsResponse; let i = index">
        <app-card [products]="product" [img]="imagePaths[i]"></app-card>
      </ng-container>
    </div>
  `,
  styles: ``,
})
export class CollectionSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() imagePaths: string[] = [];
  @Input() sliceRange: [number, number] = [0, 0];
  @Input() customClasses: string = '';

  productsResponse: productsData[] = [];
  product = signal<productsData[]>(this.productsResponse);

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.apiService.getProductsData().subscribe((data) => {
      this.productsResponse = data.slice(...this.sliceRange);
      console.log(this.productsResponse);
    });
  }
}
