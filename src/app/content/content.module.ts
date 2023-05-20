import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

//modules
import {
  OpeningSectionComponent,
  WelcomeTextComponent,
  CreativeCloudsLinksComponent,
  ContentCardComponent,
  CardRowIntroComponent,
  CardBlurbComponent,
  AdobeBoardComponent,
  CardRowExploreComponent,
  ContentComponent
} from './components/index';

@NgModule({
  declarations: [
    OpeningSectionComponent,
    WelcomeTextComponent,
    CreativeCloudsLinksComponent,
    ContentCardComponent,
    CardRowIntroComponent,
    CardBlurbComponent,
    CardRowExploreComponent,
    AdobeBoardComponent,
    ContentComponent
  ],
  imports: [SharedComponentsModule, BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [OpeningSectionComponent, ContentComponent, WelcomeTextComponent,]
})
export class ContentModule {}
