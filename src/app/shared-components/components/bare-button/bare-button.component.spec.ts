import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareButtonComponent } from './bare-button.component';

describe('BareButtonComponent', () => {
  let component: BareButtonComponent;
  let fixture: ComponentFixture<BareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BareButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
