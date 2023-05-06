import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav';

@Component({
  selector: 'menu-pdf',
  templateUrl: './menu-pdf.component.html',
  styleUrls: ['./menu-pdf.component.scss']
})
export class MenuPdfComponent implements OnInit {
  @Input() linkList: NavLink[][] | null = null;
  constructor() {}

  ngOnInit(): void {}
}
