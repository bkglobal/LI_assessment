import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss']
})
export class AddCreditCardComponent implements OnInit {
  
  creditCardForm?: FormGroup; 
  today: String = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      creditCardNumber: [''],
      cardHolderName: [''],
      expirationDate: [''],
      cvc: ['', Validators.min(3)],
      amount: [1, Validators.min(1)]
    })
  }


  tDate(ev: any) {
    console.log(ev);
    // var UserDate = document.getElementById("userdate").value;
    // var ToDate = new Date();

    // if (new Date(UserDate).getTime() <= ToDate.getTime()) {
    //       alert("The Date must be Bigger or Equal to today date");
    //       return false;
    //  }
    // return true;
}


}
