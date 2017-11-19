import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Import HttpClientModule from @angular/common/http
import { Http ,HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { LearnComponent } from './learn/learn.component';
import { GraphicComponent } from './graphic/graphic.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    LearnComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
