import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showDropDown: boolean = false;
  showSearchBar: boolean = false;
  currentDropDownId: string = '';

  constructor() {}

  ngOnInit(): void {}

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

  isOpen(id: string) {
    return this.showDropDown && this.currentDropDownId === id;
  }
}
