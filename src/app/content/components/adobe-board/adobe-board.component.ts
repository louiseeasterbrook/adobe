import { Component, OnInit, HostListener } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'adobe-board',
  templateUrl: './adobe-board.component.html',
  styleUrls: ['./adobe-board.component.scss']
})
export class AdobeBoardComponent implements OnInit {
  Theme = Theme;
  currentTheme = Theme.light;

  constructor() {}

  ngOnInit(): void {
    this.setTheme(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setTheme(window.innerWidth);
  }

  setTheme(screenWidth: number) {
    this.currentTheme = screenWidth >= 1200 ? Theme.light : Theme.dark;
  }
}
