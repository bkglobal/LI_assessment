import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './core/components/card/card.component';
import { HeaderComponent } from './core/components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { creditCardReducer } from './state/credit-card/credit-card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({creditCard: creditCardReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
