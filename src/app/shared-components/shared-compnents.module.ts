import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { BasicButtonComponent, BareButtonComponent } from './components/index';

@NgModule({
  declarations: [BasicButtonComponent, BareButtonComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [BasicButtonComponent, BareButtonComponent]
})
export class SharedComponentsModule {}
