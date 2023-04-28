import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'adobe-board',
  templateUrl: './adobe-board.component.html',
  styleUrls: ['./adobe-board.component.scss']
})
export class AdobeBoardComponent implements OnInit {
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
