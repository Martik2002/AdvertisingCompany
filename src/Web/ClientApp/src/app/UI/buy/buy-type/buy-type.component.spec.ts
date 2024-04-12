import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTypeComponent } from './buy-type.component';

describe('BuyTypeComponent', () => {
  let component: BuyTypeComponent;
  let fixture: ComponentFixture<BuyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
