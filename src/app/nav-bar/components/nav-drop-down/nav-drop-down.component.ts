import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-drop-down',
  templateUrl: './nav-drop-down.component.html',
  styleUrls: ['./nav-drop-down.component.scss']
})
export class NavDropDownComponent implements OnInit {
  @Input() title: string = '';
  // @Input() linkList: string[] = [];
  @Input() id: number = 0;
  @Input() open: boolean = false;
  @Input() topBorder: boolean = false;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionClicked() {
    this.selected.emit(this.id);
  }
}
