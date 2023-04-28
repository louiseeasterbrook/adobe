import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'opening-section',
  templateUrl: './opening-section.component.html',
  styleUrls: ['./opening-section.component.scss']
})
export class OpeningSectionComponent implements OnInit {
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
