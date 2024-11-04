import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-news-letter-input',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ReactiveFormsModule],
  template: `
    <section class="bg-gray-100 py-12">
      <div class="max-w-lg mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">
          Sign up for our Newsletter
        </h2>
        <p class="text-gray-600 mb-8">
          Get the latest updates, news, and exclusive offers directly to your
          inbox.
        </p>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="flex items-center justify-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              formControlName="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
              [ngClass]="{
                'border-red-500': email.invalid && email.touched,
                'border-gray-300': email.valid || !email.touched
              }"
            />
          </div>
          <p
            *ngIf="email.invalid && email.touched"
            class="text-red-500 mt-2 text-sm"
          >
            Please enter a valid email address.
          </p>

          <app-button
            buttonClasses="w-3/4 md:w-1/2 mx-auto mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            [labelButton]="dynamicLabel"
            [disabled]="form.invalid"
          ></app-button>
        </form>
      </div>
    </section>
  `,
  styles: ``,
})
export class NewsLetterInputComponent {
  dynamicLabel: string = 'Subscribe';
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
  });

  get email() {
    return this.form.get('email')!;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Email:', this.form.value.email);
      //  logica per gestire l'invio dell'email
    }
  }
}
