import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {
  linkList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.linkList = [
      'Creative Cloud',
      'Photoshop',
      'Adobe Express',
      'Photography',
      'Premiere Pro'
    ];
  }
}
