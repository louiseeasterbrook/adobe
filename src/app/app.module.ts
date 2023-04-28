import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';

//modules
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavBarModule,
    CommonModule,
    NoopAnimationsModule,
    ContentModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
