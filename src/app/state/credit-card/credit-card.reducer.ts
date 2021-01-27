import { createReducer, on, Action } from '@ngrx/store';

import { retrieveCreditCard } from './credit-card.actions';
import {CreditCard} from '../../models/credit-card.model';

export const initialState: ReadonlyArray<CreditCard> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrieveCreditCard, (state) => [...state])
);