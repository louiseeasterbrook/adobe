import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'card-row-intro',
  templateUrl: './card-row-intro.component.html',
  styleUrls: ['./card-row-intro.component.scss']
})
export class CardRowIntroComponent implements OnInit {
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
