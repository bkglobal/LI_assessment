import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card.model';
import { AppState } from 'src/app/state/app.state';
import { ADD_CREDIT_CARDS, RETRIEVE_CREDIT_CARDS } from 'src/app/state/credit-card/credit-card.actions';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private store: Store) { }

  addCreditCard(data: CreditCard) {
    return new Promise((resolve, reject) => {
      this.store.dispatch(
        {
          type: ADD_CREDIT_CARDS,
          payload: data,
        }
      )
      resolve(
        { message: 'Credit Card Added Successfully' }
      )
    });
  }
}
