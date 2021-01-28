import { createAction, props } from '@ngrx/store';
 
// Action Creators Identifier
export const ADD_CREDIT_CARDS       = '[CREDIT CARD] Add';
export const RETRIEVE_CREDIT_CARDS    = '[CREDIT CARD] Retrieve';


// Definition of Action Creators
export const addCreditCard = createAction(
  ADD_CREDIT_CARDS
);
 
export const retrieveCreditCard = createAction(
  RETRIEVE_CREDIT_CARDS
);


