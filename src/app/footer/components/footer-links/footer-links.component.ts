import { Component, OnInit } from '@angular/core';
import { FooterLink } from 'src/app/models/footer';
const data = require('../../data/linksData.json');

@Component({
  selector: 'footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {
  linkList: string[] = [];
  selectedId: number = -1;
  linkLists: FooterLink[][] = data;

  constructor() {}

  ngOnInit(): void {}

  isOpen(id: number) {
    return this.selectedId === id;
  }

  optionSelected(id: number) {
    if (this.selectedId === id) {
      this.selectedId = -1;
      return;
    }
    this.selectedId = id;
  }
}
