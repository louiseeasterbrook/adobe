import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'menu-help',
  templateUrl: './menu-help.component.html',
  styleUrls: ['./menu-help.component.scss']
})
export class MenuHelpComponent implements OnInit {
  @Input() linkList: NavLink[][] | null = null;
  Theme = Theme;

  constructor() {}

  ngOnInit(): void {}
}
