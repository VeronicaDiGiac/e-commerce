import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    class="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-neutral-900 to-gray-700 text-white rounded-b-lg shadow-lg"
    [ngClass]="buttonClasses"
    [disabled]="disabled"
  >
    {{ labelButton }}
  </button>`,
  styles: ``,
})
export class ButtonComponent {
  @Input() labelButton: string = 'Buy Now';
  @Input() buttonClasses!: string;
  @Input() disabled: boolean = false;
}
