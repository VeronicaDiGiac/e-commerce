import { Component } from '@angular/core';
import { CollectionSectionComponent } from '../collection-section/collection-section.component';

@Component({
  selector: 'app-man-section',
  standalone: true,
  imports: [CollectionSectionComponent],
  template: `
    <h1 class="text-4xl md:text-5xl m-6 text-center shadow-lg">
      Man Collection
    </h1>
    <div class="flex justify-center md:justify-center">
      <app-collection-section
        [customClasses]="'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'"
        [imagePaths]="manImages"
        [sliceRange]="[0, 8]"
      ></app-collection-section>
    </div>

    ,
  `,
})
export default class ManSectionComponent {
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
}
