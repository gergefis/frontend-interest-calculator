import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { Calculator } from '../../common/calculator';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit{

  offers: Calculator[] = [];

  constructor(private calculatorService: CalculatorService){}
 
 
  ngOnInit(): void {
    this.listOffers();
  }

  listOffers() {
    this.calculatorService.getOfferList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }

}
