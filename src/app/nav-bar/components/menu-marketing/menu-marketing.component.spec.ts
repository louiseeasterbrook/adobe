import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMarketingComponent } from './menu-marketing.component';

describe('MenuMarketingComponent', () => {
  let component: MenuMarketingComponent;
  let fixture: ComponentFixture<MenuMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
