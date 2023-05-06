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
  FooterDropDownComponent
} from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-compnents.module';
import { MatIconModule } from '@angular/material/icon';
import { RegionPickerComponent } from './components/region-picker/region-picker.component';

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
  providers: [],
  bootstrap: []
})
export class FooterModule {}
