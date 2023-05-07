import { Component, Input, OnInit } from '@angular/core';
import { NavData } from 'src/app/models/nav';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'desktop-drop-down',
  templateUrl: './desktop-drop-down.component.html',
  styleUrls: ['./desktop-drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() selectedId: number = 0;
  navData: NavData[] | null = null;

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navData = this.navBarService.getNavData();
  }
}
