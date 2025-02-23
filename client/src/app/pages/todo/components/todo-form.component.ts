import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

interface FormProps {
  text: string;
}

@Component({
  selector: 'ob-todo-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  styles: ``,
  template: `
    <form
      class="ob-todo-form"
      autocomplete="off"
      [formGroup]="todoForm"
      (submit)="submitForm()"
    >
      <mat-form-field>
        <mat-label>Text</mat-label>
        <input matInput formControlName="text" required />
        @if (text.invalid) {
        <mat-error>Text must be at least 5 characters long.</mat-error>
        }
      </mat-form-field>
      <br />

      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="todoForm.invalid"
      >
        Add
      </button>
    </form>
  `,
})
export class TodoFormComponent {
  initialState = input<FormProps>();

  @Output()
  formValuesChanged = new EventEmitter<FormProps>();

  @Output()
  formSubmitted = new EventEmitter<FormProps>();

  todoForm = this.formBuilder.group({
    text: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(private formBuilder: FormBuilder) {
    effect(() => {
      this.todoForm.setValue({
        text: this.initialState()?.text || '',
      });
    });
  }

  get text() {
    return this.todoForm.get('text')!;
  }

  submitForm() {
    const { text } = this.todoForm.value;
    if (!text) return;

    this.formSubmitted.emit({ text });
  }
}
