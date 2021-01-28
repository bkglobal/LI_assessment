import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.model';

@Component({
  selector: 'app-list-credit-cards',
  templateUrl: './list-credit-cards.component.html',
  styleUrls: ['./list-credit-cards.component.scss']
})
export class ListCreditCardsComponent implements OnInit {
  creditCards: CreditCard[] = [];
  constructor(  private store: Store<{ creditCard: CreditCard[] }> ) {

    // Get the cards from the store which is added by you..
    this.store.subscribe((state) => {
      this.creditCards = state.creditCard;
    }).unsubscribe();
       
  }

  ngOnInit(): void {
  }
}
