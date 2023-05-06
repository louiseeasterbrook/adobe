import { Component, Input, OnInit } from '@angular/core';
import { NavData } from 'src/app/models/nav';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() selectedId: number = 0;
  @Input() navData: NavData[] | null = null;

  constructor() {}

  ngOnInit(): void {
  }
}
