import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePicComponent } from './welcome-pic.component';

describe('WelcomePicComponent', () => {
  let component: WelcomePicComponent;
  let fixture: ComponentFixture<WelcomePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
