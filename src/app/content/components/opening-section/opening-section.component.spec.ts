import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningSectionComponent } from './opening-section.component';

describe('OpeningSectionComponent', () => {
  let component: OpeningSectionComponent;
  let fixture: ComponentFixture<OpeningSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpeningSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OpeningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
