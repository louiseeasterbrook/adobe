import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'card-blurb',
  templateUrl: './card-blurb.component.html',
  styleUrls: ['./card-blurb.component.scss']
})
export class CardBlurbComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() cta: string = '';
  @Input() theme: string = Theme.dark;
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
