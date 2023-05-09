import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDropDownComponent } from './mobile-drop-down.component';

describe('MobileDropDownComponent', () => {
  let component: MobileDropDownComponent;
  let fixture: ComponentFixture<MobileDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileDropDownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
