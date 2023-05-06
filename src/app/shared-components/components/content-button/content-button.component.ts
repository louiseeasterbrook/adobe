import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'content-button',
  templateUrl: './content-button.component.html',
  styleUrls: ['./content-button.component.scss']
})
export class ContentButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() description: string | null = null;
  @Output() buttonPressed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pressed() {
    this.buttonPressed.emit();
  }
}
