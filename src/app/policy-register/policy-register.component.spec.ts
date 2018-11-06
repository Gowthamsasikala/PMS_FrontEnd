import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRegisterComponent } from './policy-register.component';

describe('PolicyRegisterComponent', () => {
  let component: PolicyRegisterComponent;
  let fixture: ComponentFixture<PolicyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
