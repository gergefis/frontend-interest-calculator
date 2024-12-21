import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Compound Interest Calculator';
  description = 'Enter the total amount, months duration and interest and find the total compound interest of your Loan.'

  

}
