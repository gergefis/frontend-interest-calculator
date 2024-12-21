import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../../services/calculator-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  calculationResult: { totalInterest: number, totalAmount: number } | null = null;
  formData: any = null;

  constructor(private calculatorDataService: CalculatorDataService) {}

  ngOnInit(): void {
    // Retrieve data from the service
    this.calculationResult = this.calculatorDataService.getCalculationResult();
    this.formData = this.calculatorDataService.getFormData();
  }
}
