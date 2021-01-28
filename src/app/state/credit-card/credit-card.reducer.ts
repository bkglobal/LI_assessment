import { createReducer, on, Action } from '@ngrx/store';

import { addCreditCard, ADD_CREDIT_CARDS, retrieveCreditCard, RETRIEVE_CREDIT_CARDS } from './credit-card.actions';
import {CreditCard} from '../../models/credit-card.model';

export const initialState: ReadonlyArray<CreditCard> = [];

export function creditCardReducer(state: CreditCard[] = [], action: any) {
  switch(action.type) {
    case ADD_CREDIT_CARDS:
      return [...state, action.payload];
    case RETRIEVE_CREDIT_CARDS:
      return state;
    default:
      return state;
  }
}