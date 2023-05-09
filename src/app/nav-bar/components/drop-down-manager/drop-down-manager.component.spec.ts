import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownManagerComponent } from './drop-down-manager.component';

describe('DropDownManagerComponent', () => {
  let component: DropDownManagerComponent;
  let fixture: ComponentFixture<DropDownManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropDownManagerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropDownManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
