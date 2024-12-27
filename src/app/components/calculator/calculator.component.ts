import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Calculator } from '../../common/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  apiUrl: string = 'http://localhost:8080/api/calculate';
  calculatorForm!: FormGroup;
  calculationResult: { totalInterest: number, totalAmount: number } | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.calculatorForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(3)]],
      interestRate: [null, [Validators.required, Validators.min(0)]],
      months: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]],
      interest: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]],
      months: ['', [Validators.required, Validators.min(1), Validators.max(600)]],
    });
  }

  getErrorMessage(field: string): string {
    if (this.calculatorForm.get(field)?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    } else if (this.calculatorForm.get(field)?.hasError('pattern')) {
      return `Invalid ${field}.`;
    } else if (field === 'months' && this.calculatorForm.get('months')?.hasError('min')) {
      return 'Months must be greater than 0.';
    }
    return '';
  }

  onSubmit(): void {
    if (this.calculatorForm.valid) {
      const formData = this.calculatorForm.value;

      this.http.post<{ totalInterest: number, totalAmount: number }>(
        this.apiUrl,
        formData
      ).subscribe(response => {
        // Update the results with the response
        this.calculationResult = response;
      });
    }
  }

  saveCalculationResult(calculationResult: Calculator): void {
    this.http.post<Calculator>(this.apiUrl+'/save', calculationResult).subscribe( response=> {
      alert('Calculation result saved:' + response);
    }, error => {
      alert('Error saving calculation result:' + error);
    });
  }
}
