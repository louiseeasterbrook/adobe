import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import {
  NavBarComponent,
  BarOptionComponent,
  DropDownComponent,
  LinkStackComponent,
  MenuCreativityComponent,
  MobileDropDownComponent,
  DesktopMenuComponent,
  SearchBarComponent,
  MenuHelpComponent,
  MenuMarketingComponent,
  MenuPdfComponent
} from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { NavCardComponent } from './components/nav-card/nav-card.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BarOptionComponent,
    DropDownComponent,
    SearchBarComponent,
    DesktopMenuComponent,
    MobileDropDownComponent,
    MenuCreativityComponent,
    MenuCreativityComponent,
    LinkStackComponent,
    MenuPdfComponent,
    MenuMarketingComponent,
    MenuHelpComponent,
    NavCardComponent
  ],
  imports: [CommonModule, BrowserModule, SharedComponentsModule, MatIconModule],
  exports: [NavBarComponent],
  providers: [],
  bootstrap: []
})
export class NavBarModule {}
