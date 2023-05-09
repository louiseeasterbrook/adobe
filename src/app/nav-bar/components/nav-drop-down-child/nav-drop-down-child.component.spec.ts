import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropDownChildComponent } from './nav-drop-down-child.component';

describe('NavDropDownChildComponent', () => {
  let component: NavDropDownChildComponent;
  let fixture: ComponentFixture<NavDropDownChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDropDownChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDropDownChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
