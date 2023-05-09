import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'nav-drop-down-parent',
  templateUrl: './nav-drop-down-parent.component.html',
  styleUrls: ['./nav-drop-down-parent.component.scss']
})
export class NavDropDownParentComponent implements OnInit {
  @Input() title: string = '';
  @Input() id: number = 0;
  @Input() open: boolean = false;
  @Input() subHeadings: NavLink[][] | null = null;
  processedSubHeadings: NavLink[] = [];
  selectedId: number = 0;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('sub ', this.subHeadings);
    this.processSubheadings();
  }

  optionClicked() {
    this.selected.emit(this.id);
  }

  processSubheadings() {
    if (!this.subHeadings) {
      return;
    }
    this.subHeadings.forEach((x) => {
      x.forEach((y) => {
        this.processedSubHeadings.push(y);
      });
    });
  }

  isSelected(id: number) {
    console.log(id);
    if (this.selectedId === id) {
      this.selectedId = 0;
      return;
    }
    this.selectedId = id;
  }

  isOpen(id: number) {
    return this.selectedId === id;
  }
}
