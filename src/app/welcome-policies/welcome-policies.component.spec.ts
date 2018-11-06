import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePoliciesComponent } from './welcome-policies.component';

describe('WelcomePoliciesComponent', () => {
  let component: WelcomePoliciesComponent;
  let fixture: ComponentFixture<WelcomePoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
