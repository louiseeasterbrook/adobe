import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';
// const data = require('../../data/menuCreativityData.json');

@Component({
  selector: 'menu-creativity',
  templateUrl: './menu-creativity.component.html',
  styleUrls: ['./menu-creativity.component.scss']
})
export class MenuCreativityComponent implements OnInit {
  @Input() linkList: NavLink[][] | null = null;

  constructor() {}

  ngOnInit(): void {
  }
}
