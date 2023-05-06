import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavData } from 'src/app/models/nav';

@Component({
  selector: 'desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {
  @Output() navClicked: EventEmitter<number> = new EventEmitter();
  @Input() currentDropDownId: number = 0;
  @Input() showDropDown: boolean = false;
  @Input() navData: NavData[] | null = null;

  constructor() {}

  ngOnInit(): void {
  }

  optionClick(id: number) {
    this.navClicked.emit(id);
  }

  isOpen(id: number) {
    return this.showDropDown && this.currentDropDownId === id;
  }
}
