import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlurbComponent } from './card-blurb.component';

describe('CardBlurbComponent', () => {
  let component: CardBlurbComponent;
  let fixture: ComponentFixture<CardBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBlurbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
