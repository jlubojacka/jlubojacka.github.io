import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponent } from './card/card.component';
import {HashLocationStrategy, Location, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    InterestsComponent,
    ProjectsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  /*  if you call location.go('/foo'), the browser's URL will become example.com#/foo
  *   may solve 404 when manually changing URL in browser
  * */
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
