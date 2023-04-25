import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creative-clouds-links',
  templateUrl: './creative-clouds-links.component.html',
  styleUrls: ['./creative-clouds-links.component.scss']
})
export class CreativeCloudsLinksComponent implements OnInit {
  titles: string[] = [
    'Everyone',
    'Students',
    'Photographers',
    'Business',
    'Adobe stock',
    'Special offers'
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.titles);
  }
}
