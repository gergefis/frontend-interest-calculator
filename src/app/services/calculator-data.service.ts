import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {
  private data: { totalInterest: number, totalAmount: number } | null = null;
  private formData: any = null;

  setCalculationResult(result: { totalInterest: number, totalAmount: number }) {
    this.data = result;
  }

  getCalculationResult() {
    return this.data;
  }

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
}
