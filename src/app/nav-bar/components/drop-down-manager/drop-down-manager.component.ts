import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drop-down-manager',
  templateUrl: './drop-down-manager.component.html',
  styleUrls: ['./drop-down-manager.component.scss']
})
export class DropDownManagerComponent implements OnInit {
  @Input() showMobileDropDown: boolean = false;
  @Input() showDesktopDropDown: boolean = false;
  @Input() showSearchBar: boolean = false;
  @Input() selectedIdDesktop: number = 0;
  @Output() closeNav = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  navClick(event: { target: any }) {
    if (event.target.classList[0] === 'dd-inner') {
      this.closeNav.emit();
    }
  }
}
