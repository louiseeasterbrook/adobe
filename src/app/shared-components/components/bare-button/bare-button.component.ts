import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'bare-button',
  templateUrl: './bare-button.component.html',
  styleUrls: ['./bare-button.component.scss']
})
export class BareButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() theme: string = Theme.dark;
  @Output() buttonPressed = new EventEmitter();
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {
  }

  pressed() {
    this.buttonPressed.emit();
  }
}
