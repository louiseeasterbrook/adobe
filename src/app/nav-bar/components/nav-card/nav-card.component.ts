import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() cta: string = '';
  @Input() theme: string = Theme.dark;
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
