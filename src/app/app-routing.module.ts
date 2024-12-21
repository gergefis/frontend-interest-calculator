import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'offer-result', component: ResultComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'}, //TODO  
  {path: 'register-user', component: UserRegisterComponent},
  {path: 'calculator', component: CalculatorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
