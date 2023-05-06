import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() theme: string = Theme.dark;
  @Output() buttonPressed = new EventEmitter();
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}

  pressed() {
    this.buttonPressed.emit();
  }
}
