import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRowExploreComponent } from './card-row-explore.component';

describe('CardRowExploreComponent', () => {
  let component: CardRowExploreComponent;
  let fixture: ComponentFixture<CardRowExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRowExploreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardRowExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
