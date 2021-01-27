import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { CreditCardComponent } from './credit-card.component';
import { ListCreditCardsComponent } from './components/list-credit-cards/list-credit-cards.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCreditCardComponent, CreditCardComponent, ListCreditCardsComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class CreditCardModule { }
