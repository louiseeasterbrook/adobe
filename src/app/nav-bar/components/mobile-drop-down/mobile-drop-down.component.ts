import { Component, OnInit } from '@angular/core';
import { NavData } from 'src/app/models/nav';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'mobile-drop-down',
  templateUrl: './mobile-drop-down.component.html',
  styleUrls: ['./mobile-drop-down.component.scss']
})
export class MobileDropDownComponent implements OnInit {
  navData: NavData[] | null = null;

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navData = this.navBarService.getNavData();
    console.log(this.navData);
  }
}
