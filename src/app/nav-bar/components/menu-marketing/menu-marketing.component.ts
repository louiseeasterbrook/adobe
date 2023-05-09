import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'menu-marketing',
  templateUrl: './menu-marketing.component.html',
  styleUrls: ['./menu-marketing.component.scss']
})
export class MenuMarketingComponent implements OnInit {
  @Input() linkList: NavLink[][] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
