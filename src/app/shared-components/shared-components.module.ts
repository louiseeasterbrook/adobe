import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import {
  BasicButtonComponent,
  BareButtonComponent,
  ContentButtonComponent
} from './components/index';

@NgModule({
  declarations: [
    BasicButtonComponent,
    BareButtonComponent,
    ContentButtonComponent
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [BasicButtonComponent, BareButtonComponent, ContentButtonComponent]
})
export class SharedComponentsModule {}
