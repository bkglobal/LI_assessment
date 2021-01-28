import { CreditCard } from '../models/credit-card.model';

export interface AppState {
    creditCards: ReadonlyArray<CreditCard>
}