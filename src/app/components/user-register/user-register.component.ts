import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WhitespaceValidation } from '../../validators/whitespace-validation';
import { Country } from '../../common/country';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
  
  registerFormGroup!: FormGroup;
  countries: Country[] = [];
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      user: this.fb.group({
        firstName: ['', Validators.required, Validators.minLength(2), WhitespaceValidation.notOnlyWhitespace],
        lastName: ['', Validators.required, Validators.minLength(2), WhitespaceValidation.notOnlyWhitespace],
        email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      }),
      homeAddress: this.fb.group({
        street: [''],
        city: [''],
        country: [''],
        zipCode: ['']
      }),
      workAddress: this.fb.group({
        street: [''],
        city: [''],
        country: [''],
        zipCode: ['']
      }),
    });
  }

  get firstName() {
    return this.registerFormGroup.get('user.firstName');
  }
  get lastName() {
    return this.registerFormGroup.get('user.lastName');
  }
  get email() {
    return this.registerFormGroup.get('user.email');
  }

  onSubmit() {
    console.log("Handling the submit button");

    if (this.registerFormGroup.invalid) {
      this.registerFormGroup.markAllAsTouched();
    }

    const user = this.registerFormGroup.get('user')?.value;
    console.log(user);
  
    const email = user?.email;
    console.log("The email address is " + email);
  
  }

}
