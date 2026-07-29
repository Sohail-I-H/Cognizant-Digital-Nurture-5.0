import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';

function noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: ['', [Validators.required, Validators.email]],

      courseId: [
        '',
        [Validators.required, noCourseCode]
      ],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array([])

    });

  }

  get additionalCourses(): FormArray<FormControl> {
  return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
}

  addCourse(): void {
  this.additionalCourses.push(
    new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  );
}

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.enrollForm.value);
    console.log(this.enrollForm.getRawValue());
    console.log(this.enrollForm.valid);
  }

}