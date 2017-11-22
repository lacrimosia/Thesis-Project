import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// components
import { GraphicComponent } from './graphic/graphic.component';
import { LearnComponent } from './learn/learn.component';
import { InfoComponent } from './info/info.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: 'intro', component: InfoComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'try', component: GraphicComponent },
  { path: 'play', component: PlayComponent },
  { path: '**', redirectTo: 'intro', pathMatch: 'full' }
];

@NgModule({
   exports: [ RouterModule ],
   imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
