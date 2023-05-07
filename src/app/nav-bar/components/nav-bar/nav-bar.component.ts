import { Component, OnInit, HostListener } from '@angular/core';
import { NavData } from 'src/app/models/nav';
const data = require('../../data/navData.json');

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showDesktopDropDown: boolean = false;
  showSearchBar: boolean = false;
  currentDropDownId: number = 0;
  showMobileDropDown: boolean = false;
  currentPosition: number = 0;
  hideNav: boolean = false;

  navData: NavData[] | null = null;

  constructor() {}

  ngOnInit(): void {
    this.navData = data;
  }
  @HostListener('window:resize')
  onResize() {
    if (document.documentElement.clientWidth < 900) {
      this.showDesktopDropDown = false;
    }
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if (
      this.currentPosition < 100 ||
      document.documentElement.scrollTop < 100 ||
      document.documentElement.scrollTop < this.currentPosition - 5
    ) {
      this.hideNav = false;
    } else if (document.documentElement.scrollTop > this.currentPosition) {
      this.hideNav = true;
      this.closeMenus();
    }
    this.currentPosition = document.documentElement.scrollTop;
  }

  closeMenus() {
    this.showDesktopDropDown = false;
    this.showSearchBar = false;
    this.showMobileDropDown = false;
  }

  clickNavOption(id: number) {
    this.showSearchBar = false;
    if (this.showDesktopDropDown && this.currentDropDownId === id) {
      this.showDesktopDropDown = false;
      return;
    }

    this.showDesktopDropDown = true;
    this.currentDropDownId = id;
  }

  showSearch() {
    this.showSearchBar = !this.showSearchBar;
    this.showDesktopDropDown = false;
  }

  clickMobileMenuButton() {
    this.showMobileDropDown = !this.showMobileDropDown;
  }
}
