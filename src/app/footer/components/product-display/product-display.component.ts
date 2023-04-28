import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  @Input() title: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
