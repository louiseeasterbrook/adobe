import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {
  FooterComponent,
  ProductDisplayComponent,
  SocialLinksComponent,
  ProductLinksComponent,
  FooterLinksComponent,
  LinkListComponent,
  FooterDropDownComponent,
  RegionPickerComponent
} from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FooterComponent,
    LinkListComponent,
    FooterLinksComponent,
    ProductLinksComponent,
    SocialLinksComponent,
    ProductDisplayComponent,
    FooterDropDownComponent,
    RegionPickerComponent
  ],
  imports: [CommonModule, BrowserModule, SharedComponentsModule, MatIconModule],
  exports: [FooterComponent],
  providers: []
})
export class FooterModule {}
