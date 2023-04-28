import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input() title: string = '';
  @Input() linkList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.linkList);
  }
}
