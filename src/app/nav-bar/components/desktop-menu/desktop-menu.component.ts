import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {
  @Output() navClicked: EventEmitter<string> = new EventEmitter();
  @Input() currentDropDownId: string = '';
  @Input() showDropDown: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  optionClick(id: string) {
    this.navClicked.emit(id);
  }

  isOpen(id: string) {
    return this.showDropDown && this.currentDropDownId === id;
  }
}
