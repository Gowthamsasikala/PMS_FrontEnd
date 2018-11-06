import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignInPageComponent } from './user-sign-in-page.component';

describe('UserSignInPageComponent', () => {
  let component: UserSignInPageComponent;
  let fixture: ComponentFixture<UserSignInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
