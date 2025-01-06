import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { productsData } from '../../../models/interfaces';
import { NgFor } from '@angular/common';
import CardComponent from '../card/card.component';
@Component({
  selector: 'app-man-section',
  standalone: true,
  imports: [NgFor, CardComponent],
  template: `
    <h1 class="text-4xl md:text-5xl m-6 text-center shadow-lg">
      Man Collection
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
    >
      <div *ngFor="let product of manProducts; let i = index">
        <app-card [products]="product" [img]="manImages[i]"></app-card>
      </div>
    </div>

    ,
  `,
})
export default class ManSectionComponent {
  manProducts: productsData[] = [];
  manImages = [
    'assets/man-section/giaccajeans1.png',
    'assets/man-section/giaccabeije1.png',
    'assets/man-section/jeanbaggy1.png',
    'assets/man-section/giaccanera1.png',
    'assets/man-section/giaccaquadri1.png',
    'assets/man-section/pantalonineri1.png',
    'assets/man-section/tshirtverdeacqua1.png',
    'assets/man-section/giaccaneve1.png',
  ];

  constructor(public apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getManProducts().subscribe((data) => {
      this.manProducts = data;
    });
  }
}
