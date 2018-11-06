import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarWelcomeComponent } from './nav-bar-welcome.component';

describe('NavBarWelcomeComponent', () => {
  let component: NavBarWelcomeComponent;
  let fixture: ComponentFixture<NavBarWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
