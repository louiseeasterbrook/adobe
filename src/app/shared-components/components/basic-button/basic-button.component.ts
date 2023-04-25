import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  @Input() text: string = '';
  @Output() buttonPressed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pressed() {
    this.buttonPressed.emit();
  }
}
