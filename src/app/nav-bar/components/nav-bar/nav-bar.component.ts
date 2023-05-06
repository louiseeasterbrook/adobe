import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showDropDown: boolean = false;
  showSearchBar: boolean = false;
  currentDropDownId: string = '';
  showMobileMenu: boolean = false;
  currentPosition: number = 0;
  hideNav: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:scroll')
  scrollFunction() {
    if (
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
    this.showDropDown = false;
    this.showSearchBar = false;
    this.showMobileMenu = false;
  }

  clickNavOption(id: string) {
    this.showSearchBar = false;
    if (this.showDropDown && this.currentDropDownId === id) {
      this.showDropDown = false;
      return;
    }

    this.showDropDown = true;
    this.currentDropDownId = id;
  }

  showSearch() {
    this.showSearchBar = !this.showSearchBar;
    this.showDropDown = false;
  }

  clickMobileMenuButton() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
