import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { CalculatorService } from './services/calculator.service';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorDataService } from './services/calculator-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ResultComponent,
    UserRegisterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalculatorService,
    CalculatorDataService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
