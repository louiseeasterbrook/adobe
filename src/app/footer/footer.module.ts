import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {
  FooterComponent,
  ProductDisplayComponent,
  SocialLinksComponent,
  ProductLinksComponent,
  FooterLinksComponent,
  LinkListComponent
} from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-compnents.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FooterComponent,
    LinkListComponent,
    FooterLinksComponent,
    ProductLinksComponent,
    SocialLinksComponent,
    ProductDisplayComponent
  ],
  imports: [CommonModule, BrowserModule, SharedComponentsModule, MatIconModule],
  exports: [FooterComponent],
  providers: [],
  bootstrap: []
})
export class FooterModule {}
