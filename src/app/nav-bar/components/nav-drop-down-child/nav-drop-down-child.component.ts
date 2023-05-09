import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'nav-drop-down-child',
  templateUrl: './nav-drop-down-child.component.html',
  styleUrls: ['./nav-drop-down-child.component.scss']
})
export class NavDropDownChildComponent implements OnInit {
  @Input() title: string = '';
  @Input() id: number = 0;
  @Input() open: boolean = true;
  @Input() linkData: NavLink | null = null;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log('MADE T  ', this.linkData);
  }

  optionClicked() {
    this.selected.emit(this.id);
  }
}
