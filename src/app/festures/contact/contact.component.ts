import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
      <div class="border-b border-gray-900/10 pb-12">
        <h2
          class="text-lg font-semibold text-gray-900 text-center sm:text-left"
        >
          Personal Information
        </h2>
        <p class="mt-1 text-sm text-gray-600 text-center sm:text-left">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- Campo Nome -->
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-900"
              >Name</label
            >
            <div class="mt-2">
              <input
                type="text"
                id="first-name"
                formControlName="firstName"
                class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                [ngClass]="getLabelClass('firstName')"
              />
              <div
                *ngIf="
                  form.get('firstName')?.invalid &&
                  form.get('firstName')?.touched
                "
                class="text-red-500 text-sm"
              >
                <span *ngIf="form.get('firstName')?.errors?.['required']"
                  >Name is required.</span
                >
                <span *ngIf="form.get('firstName')?.errors?.['minlength']"
                  >Name must be at least 3 characters.</span
                >
              </div>
            </div>
          </div>

          <!-- Campo Cognome -->
          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-900"
              >Last Name</label
            >
            <div class="mt-2">
              <input
                type="text"
                id="last-name"
                formControlName="lastName"
                class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                [ngClass]="getLabelClass('lastName')"
              />
              <div
                *ngIf="
                  form.get('lastName')?.invalid && form.get('lastName')?.touched
                "
                class="text-red-500 text-sm"
              >
                <span *ngIf="form.get('lastName')?.errors?.['required']"
                  >Last Name is required.</span
                >
                <span *ngIf="form.get('lastName')?.errors?.['minlength']"
                  >Last name must be at least 3 characters.</span
                >
              </div>
            </div>
          </div>

          <!-- Campo Email -->
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium text-gray-900"
              >Email</label
            >
            <div class="mt-2">
              <input
                id="email"
                type="email"
                formControlName="email"
                class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                [ngClass]="getLabelClass('email')"
              />
              <div
                *ngIf="form.get('email')?.invalid && form.get('email')?.touched"
                class="text-red-500 text-sm"
              >
                <span *ngIf="form.get('email')?.errors?.['required']"
                  >Email is required.</span
                >
                <span *ngIf="form.get('email')?.errors?.['pattern']"
                  >Please enter a valid email address.</span
                >
              </div>
            </div>
          </div>

          <!-- Campo Messaggio -->
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium text-gray-900"
              >Message</label
            >
            <div class="mt-2">
              <textarea
                id="about"
                rows="3"
                formControlName="message"
                class="block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                [ngClass]="getLabelClass('message')"
              ></textarea>
              <div
                *ngIf="
                  form.get('message')?.invalid && form.get('message')?.touched
                "
                class="text-red-500 text-sm"
              >
                <span *ngIf="form.get('message')?.errors?.['maxlength']"
                  >The message cannot exceed 100 characters</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottoni -->
      <div
        class="mt-6 flex flex-col sm:flex-row items-center justify-end gap-x-6"
      >
        <button
          type="button"
          class="text-sm font-semibold text-gray-900 mb-2 sm:mb-0"
          (click)="resetForm()"
        >
          Delete
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          [disabled]="form.invalid"
        >
          Save
        </button>
      </div>
    </form>
  `,
  styles: [
    `
      .border-invalid {
        border: 2px solid red;
      }
      .border-valid {
        border: 2px solid blue;
      }
    `,
  ],
})
export class ContactComponent {
  // isFocused: boolean = false;
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    message: new FormControl('', [
      Validators.maxLength(100),
      Validators.minLength(3),
    ]),
  });

  // Funzione che ritorna la classe CSS in base alla validità del campo
  getLabelClass(fieldName: string): string {
    const control = this.form.get(fieldName);
    return control?.valid
      ? 'border-valid'
      : control?.touched && control.invalid
      ? 'border-invalid'
      : '';
  }

  // getLabelMessageClass(): string {
  //   const messageControl: any = this.form.get('message');
  //   if (this.isFocused && messageControl?.value?.length > 0) {
  //     return 'border: 2px solid blue'; // bordo blu solo quando ha focus e contiene testo
  //   }
  //   return 'ring-gray-300'; // bordo grigio di default
  // }

  // onFocus() {
  //   this.isFocused = true;
  // }

  // onBlur() {
  //   this.isFocused = false;
  // }

  save() {
    console.log(this.form.value);
    // if (this.form.valid) {
    //   // Simulazione della richiesta al backend
    //   this.http
    //     .post('https://jsonplaceholder.typicode.com/posts', this.form.value)
    //     .pipe(
    //       delay(1000), // Simula un ritardo di 1 secondo per l'invio
    //       catchError((error) => {
    //         console.error("Errore durante l'invio dei dati:", error);
    //         return of({ success: false, message: 'Errore di invio.' });
    //       })
    //     )
    //     .subscribe((response: any) => {
    //       console.log('Risposta dal server:', response);
    //       alert('Form inviato con successo!');
    //     });
    // } else {
    //   this.form.markAllAsTouched(); // Mostra gli errori se il form è invalido
    // }
  }

  resetForm() {
    this.form.reset();
  }
  constructor(http: HttpClient) {}
}
