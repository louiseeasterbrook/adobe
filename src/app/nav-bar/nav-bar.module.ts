import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {
  NavBarComponent,
  BarOptionComponent,
  DropDownComponent
} from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-compnents.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavBarComponent,
    BarOptionComponent,
    DropDownComponent,
    SearchBarComponent
  ],
  imports: [CommonModule, BrowserModule, SharedComponentsModule, MatIconModule],
  exports: [NavBarComponent],
  providers: [],
  bootstrap: []
})
export class NavBarModule {}
