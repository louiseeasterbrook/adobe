import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() cta: string = '';
  @Input() theme: string = Theme.dark;

  constructor() {}

  ngOnInit(): void {}
}
