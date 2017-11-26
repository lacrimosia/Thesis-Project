import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2OrderModule } from 'ng2-order-pipe';

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
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    LearnComponent,
    GraphicComponent,
    PlayComponent,
    ModulesComponent,
    SideMenuComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Ng2OrderModule
  ],
  providers: [HttpModule, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
