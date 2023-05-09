import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeCloudsLinksComponent } from './creative-clouds-links.component';

describe('CreativeCloudsLinksComponent', () => {
  let component: CreativeCloudsLinksComponent;
  let fixture: ComponentFixture<CreativeCloudsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreativeCloudsLinksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreativeCloudsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
