import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/services/credit-card/credit-card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss']
})
export class AddCreditCardComponent implements OnInit {

  creditCardForm: FormGroup;
  
  // For disabling past dates..
  today: String = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder, private creditCardService: CreditCardService, private router: Router) {
    this.creditCardForm = this.fb.group({
      creditCardNumber: ['', [Validators.required]],
      cardHolderName: ['', [Validators.required]],
      expirationDate: ['',  [Validators.required]],
      cvc: ['', [Validators.minLength(3), Validators.maxLength(3)]],
      amount: [1, [Validators.required, Validators.min(1)]]
    });
   }

  ngOnInit(): void {
   
  }

  submitCreditCardForm(ev: any) {
    this.creditCardForm.markAllAsTouched();
    console.log(this.creditCardForm.get('cvc')?.errors)
    if (this.creditCardForm.valid) {
      console.log('form is valid');
      console.log(this.creditCardForm.value);
      this.creditCardService.addCreditCard(this.creditCardForm.value).then((response: any) => {

        // Here you can display message here ..
        console.log(response['message']);

        // If it is succeedded then navigate to home page..
        this.router.navigate(['/']);
      })
    }
  }

  get creditCardNumber() {
    return this.creditCardForm.get('creditCardNumber');
  }

  get cardHolderName() {
    return this.creditCardForm.get('cardHolderName');
  }

  get expirationDate() {
    return this.creditCardForm.get('expirationDate');
  }

  get cvc() {
    return this.creditCardForm.get('cvc');
  }

  get amount() {
    return this.creditCardForm.get('amount');
  }

}
