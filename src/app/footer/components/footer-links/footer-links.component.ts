import { Component, OnInit } from '@angular/core';
const ok = require('../../data/linksData.json');

interface Link {
  Title: string;
  Id: number;
  Links: string[];
}

@Component({
  selector: 'footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {
  linkList: string[] = [];
  selectedId: number = -1;
  linkLists: Link[][] = ok;

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
