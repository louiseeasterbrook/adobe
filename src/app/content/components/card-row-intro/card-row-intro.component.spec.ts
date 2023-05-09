import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRowIntroComponent } from './card-row-intro.component';

describe('CardRowIntroComponent', () => {
  let component: CardRowIntroComponent;
  let fixture: ComponentFixture<CardRowIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRowIntroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardRowIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
