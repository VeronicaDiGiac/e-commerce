import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { productsData } from '../../../models/interfaces';
import CardComponent from '../card/card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-woman-section',
  standalone: true,
  imports: [CardComponent, NgFor],
  template: `
    <h1 class="text-4xl md:text-5xl m-6 text-center shadow-lg">
      Woman Collection
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
    >
      <div *ngFor="let product of womanProducts; let i = index">
        <app-card [products]="product" [img]="womanImages[i]"></app-card>
      </div>
    </div>
  `,
  styles: ``,
})
export default class WomanSectionComponent {
  womanProducts: productsData[] = [];
  womanImages = [
    'assets/woman-section/imgdressblu1.png',
    'assets/woman-section/Immagine.png',
    'assets/woman-section/Immaginecamiciaflanella1.png',
    'assets/woman-section/Immaginepantverdi1.png',
    'assets/woman-section/Immaginecatshirt1.png',
    'assets/woman-section/imgfelpagray1.png',
    'assets/woman-section/imggiaccabrown1.png',
    'assets/woman-section/imgtshirtbianca1.png',
  ];
  constructor(public apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getWomanProducts().subscribe((data) => {
      this.womanProducts = data;
    });
  }
}
