import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeBoardComponent } from './adobe-board.component';

describe('AdobeBoardComponent', () => {
  let component: AdobeBoardComponent;
  let fixture: ComponentFixture<AdobeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobeBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
