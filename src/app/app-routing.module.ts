import { RegisterComponent } from './shared/register/register.component';
import { QuizComponent } from './main/ajquiz/quiz/quiz.component';
import { AuthGuardGuard } from './core/authGuard/auth-guard.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { StartComponent } from './main/start/start.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full' },
{ path: 'start', component: StartComponent },
{ path: 'guidestart',
  loadChildren: './maincontent/maincontent.module#MaincontentModule',
  canActivate: [AuthGuardGuard]
},
{ path: 'quiz', component: QuizComponent },
{ path: 'register', component: RegisterComponent },
  { path: '**',  component: Err404pageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
