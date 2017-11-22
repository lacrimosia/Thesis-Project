import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Import HttpClientModule from @angular/common/http
import { Http ,HttpModule} from '@angular/http';

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { LearnComponent } from './learn/learn.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AppRoutingModule } from './/app-routing.module';
import { PlayComponent } from './play/play.component';
import { ModulesComponent } from './modules/modules.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    LearnComponent,
    GraphicComponent,
    PlayComponent,
    ModulesComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HttpModule, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
