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
  selectedId: number = 0;

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navData = this.navBarService.getNavData();
    console.log(this.navData);
  }

  isSelected(id: number) {
    console.log(id);
    if (this.selectedId === id) {
      this.selectedId = 0;
      return;
    }
    this.selectedId = id;
  }

  isOpen(id: number) {
    return this.selectedId === id;
  }
}
