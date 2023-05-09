import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'nav-drop-down',
  templateUrl: './nav-drop-down.component.html',
  styleUrls: ['./nav-drop-down.component.scss']
})
export class NavDropDownComponent implements OnInit {
  @Input() title: string = '';
  @Input() id: number = 0;
  @Input() open: boolean = false;
  @Input() subHeadings: NavLink[][] | null = null;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('sub ', this.subHeadings);
  }

  optionClicked() {
    this.selected.emit(this.id);
  }
}
