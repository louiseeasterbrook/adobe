import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-blurb',
  templateUrl: './card-blurb.component.html',
  styleUrls: ['./card-blurb.component.scss']
})
export class CardBlurbComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() cta: string = '';

  constructor() {}

  ngOnInit(): void {}
}
