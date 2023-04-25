import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicButtonComponent } from './components/index';

@NgModule({
  declarations: [BasicButtonComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports:[BasicButtonComponent]
})
export class SharedComponentsModule {}
