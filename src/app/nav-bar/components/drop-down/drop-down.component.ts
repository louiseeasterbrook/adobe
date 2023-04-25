import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
