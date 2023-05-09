import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreativityComponent } from './menu-creativity.component';

describe('MenuCreativityComponent', () => {
  let component: MenuCreativityComponent;
  let fixture: ComponentFixture<MenuCreativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCreativityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCreativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
