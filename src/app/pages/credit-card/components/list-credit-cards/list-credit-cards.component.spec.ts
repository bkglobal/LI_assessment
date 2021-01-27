import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditCardsComponent } from './list-credit-cards.component';

describe('ListCreditCardsComponent', () => {
  let component: ListCreditCardsComponent;
  let fixture: ComponentFixture<ListCreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
