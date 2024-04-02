import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCreateComponent } from './buy-create.component';

describe('BuyCreateComponent', () => {
  let component: BuyCreateComponent;
  let fixture: ComponentFixture<BuyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
