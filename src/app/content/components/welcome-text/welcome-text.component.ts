import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.scss']
})
export class WelcomeTextComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() cta: string = '';
  @Input() linkText: string = '';
  @Input() theme: string = Theme.dark;
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {
    console.log('---weolcome ', this.theme);
  }
}
