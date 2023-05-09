import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDropDownComponent } from './footer-drop-down.component';

describe('FooterDropDownComponent', () => {
  let component: FooterDropDownComponent;
  let fixture: ComponentFixture<FooterDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDropDownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
