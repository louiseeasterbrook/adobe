import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bar-option',
  templateUrl: './bar-option.component.html',
  styleUrls: ['./bar-option.component.scss']
})
export class BarOptionComponent implements OnInit {
  @Input() text: string = '';
  @Input() id: number = 0;
  @Input() open: boolean = false;
  @Output() navPressed: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionPressed() {
    this.navPressed.emit(this.id);
  }
}
