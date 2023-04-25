import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bar-option',
  templateUrl: './bar-option.component.html',
  styleUrls: ['./bar-option.component.scss']
})
export class BarOptionComponent implements OnInit {
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() open: boolean = false;
  @Output() navPressed: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionPressed() {
    this.navPressed.emit(this.id);
  }
}
