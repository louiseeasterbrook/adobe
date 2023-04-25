import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared-components/shared-compnents.module';

//modules
import {
  OpeningSectionComponent,
  WelcomeTextComponent,
  CreativeCloudsLinksComponent,
  ContentCardComponent,
  CardRowIntroComponent,
  CardBlurbComponent
} from './components/index';
import { CardRowExploreComponent } from './components/card-row-explore/card-row-explore.component';
import { VideoCardComponent } from './components/video-card/video-card.component';

@NgModule({
  declarations: [
    OpeningSectionComponent,
    WelcomeTextComponent,
    CreativeCloudsLinksComponent,
    ContentCardComponent,
    CardRowIntroComponent,
    CardBlurbComponent,
    CardRowExploreComponent,
    VideoCardComponent
  ],
  imports: [SharedComponentsModule, BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [
    OpeningSectionComponent,
    CreativeCloudsLinksComponent,
    CardRowIntroComponent,
    CardBlurbComponent,
    CardRowExploreComponent
  ]
})
export class ContentModule {}
