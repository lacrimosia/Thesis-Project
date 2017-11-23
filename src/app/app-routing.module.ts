import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// components
import { GraphicComponent } from './graphic/graphic.component';
import { LearnComponent } from './learn/learn.component';
import { InfoComponent } from './info/info.component';
import { PlayComponent } from './play/play.component';
import { ModulesComponent } from './modules/modules.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'intro', component: InfoComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'try', component: GraphicComponent },
  { path: 'play', component: PlayComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'modules', pathMatch: 'full' }
];

@NgModule({
   exports: [ RouterModule ],
   imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
