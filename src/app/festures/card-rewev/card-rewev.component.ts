import { Component, Input } from '@angular/core';
import { ReviewModel } from '../../../models/interfaces';

@Component({
  selector: 'app-card-rewev',
  standalone: true,
  imports: [],
  template: `
    <section class="bg-gray-100 ">
      <div
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-80 flex-shrink-0"
      >
        <div class="flex items-center mb-4">
          <div>
            <h3 class="font-semibold text-lg text-gray-700">
              {{ rewevContent.name }}
            </h3>
            <p class="text-yellow-500 items-center">
              {{ rewevContent.rating }}
            </p>
          </div>
        </div>
        <p class="text-gray-600" style="width: 272px; height: 80px;">
          {{ rewevContent.comment }}
        </p>
      </div>
    </section>
  `,
  styles: '',
})
export class CardRewevComponent {
  @Input() rewevContent!: ReviewModel;
}
