import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bare-button',
  templateUrl: './bare-button.component.html',
  styleUrls: ['./bare-button.component.scss']
})
export class BareButtonComponent implements OnInit {
  @Input() text: string = '';
  @Output() buttonPressed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pressed() {
    this.buttonPressed.emit();
  }
}
