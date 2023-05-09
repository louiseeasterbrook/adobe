import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'link-stack',
  templateUrl: './link-stack.component.html',
  styleUrls: ['./link-stack.component.scss']
})
export class LinkStackComponent implements OnInit {
  @Input() data: NavLink | null = null;

  constructor() {}

  ngOnInit(): void {}
}
