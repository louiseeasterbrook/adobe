import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'menu-pdf',
  templateUrl: './menu-pdf.component.html',
  styleUrls: ['./menu-pdf.component.scss']
})
export class MenuPdfComponent implements OnInit {
  @Input() linkList: NavLink[][] | null = null;
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
