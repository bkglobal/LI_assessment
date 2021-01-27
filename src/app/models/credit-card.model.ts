export interface CreditCard {
    id: number;
    creditCardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    ccv: string;
    amount: number;
}