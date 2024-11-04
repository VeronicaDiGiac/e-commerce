import { Component, Input } from '@angular/core';
import { BlogArticleModel } from '../../../models/interfaces';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  template: `
    <div
      class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <!-- Immagine dell'articolo -->
      <img
        [src]="blogArticles.img"
        alt="Immagine Articolo"
        class="w-full h-48 object-cover"
      />

      <!-- Contenuto dell'articolo -->
      <div class="p-6">
        <p class="text-gray-500 text-sm mb-2">{{ blogArticles.date }}</p>
        <!-- Titolo dell'articolo -->
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">
          {{ blogArticles.title }}
        </h3>

        <!-- Breve descrizione -->
        <p class="text-gray-600 mb-4">{{ blogArticles.description }}.</p>

        <!-- Link "Leggi di più" -->
        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">
          Leggi di più &rarr;
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class BlogCardComponent {
  @Input() blogArticles!: BlogArticleModel;
}
