import { Component } from '@angular/core';
import { CollectionSectionComponent } from '../collection-section/collection-section.component';
@Component({
  selector: 'app-woman-section',
  standalone: true,
  imports: [CollectionSectionComponent],
  template: `
    <h1 class="text-4xl md:text-5xl m-6 text-center shadow-lg">
      Woman Collection
    </h1>
    <div class="flex justify-center md:justify-center">
      <app-collection-section
        [customClasses]="'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'"
        [imagePaths]="womanImages"
        [sliceRange]="[8, 16]"
      ></app-collection-section>
    </div>
  `,
  styles: ``,
})
export default class WomanSectionComponent {
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
}
