import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPagesComponent } from './agent-pages.component';

describe('AgentPagesComponent', () => {
  let component: AgentPagesComponent;
  let fixture: ComponentFixture<AgentPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
