export interface CreditCard {
    id: number;
    creditCardNumber: string;
    cardHolderName: string;
    expirationDate: Date;
    cvc: string;
    amount: number;
}