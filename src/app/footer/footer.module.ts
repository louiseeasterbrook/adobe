import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './components/index';

import { SharedComponentsModule } from '../shared-components/shared-compnents.module';
import { MatIconModule } from '@angular/material/icon';
import { LinkListComponent } from './components/link-list/link-list.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { ProductLinksComponent } from './components/product-links/product-links.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';

@NgModule({
  declarations: [FooterComponent, LinkListComponent, FooterLinksComponent, ProductLinksComponent, SocialLinksComponent, ProductDisplayComponent],
  imports: [CommonModule, BrowserModule, SharedComponentsModule, MatIconModule],
  exports: [FooterComponent],
  providers: [],
  bootstrap: []
})
export class FooterModule {}
