import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'footer-drop-down',
  templateUrl: './footer-drop-down.component.html',
  styleUrls: ['./footer-drop-down.component.scss']
})
export class FooterDropDownComponent implements OnInit {
  @Input() title: string = '';
  @Input() linkList: string[] = [];
  @Input() id: number = -1;
  @Input() open: boolean = false;
  @Input() topBorder: boolean = false;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionClicked() {
    this.selected.emit(this.id);
  }
}
