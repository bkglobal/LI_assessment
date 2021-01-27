import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { ListCreditCardsComponent } from './components/list-credit-cards/list-credit-cards.component';

const routes: Routes = [
  {
    path: '', component: ListCreditCardsComponent,
  }, {
    path: 'add', component: AddCreditCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
