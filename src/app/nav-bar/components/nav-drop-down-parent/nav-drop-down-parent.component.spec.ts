import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropDownParentComponent } from './nav-drop-down-parent.component';

describe('FooterDropDownComponent', () => {
  let component: NavDropDownParentComponent;
  let fixture: ComponentFixture<NavDropDownParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavDropDownParentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavDropDownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
