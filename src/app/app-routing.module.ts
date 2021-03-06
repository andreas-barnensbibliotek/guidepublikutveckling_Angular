import { VemskalockaenmotvilligpublikochhurComponent } from './maincontent/publik/vemskalockaenmotvilligpublikochhur/vemskalockaenmotvilligpublikochhur.component';
import { IntervjuHeatherComponent } from './maincontent/publik/video/intervju-heather/intervju-heather.component';
import { HurvalkannerdudinpublikComponent } from './maincontent/publik/C/hurvalkannerdudinpublik/hurvalkannerdudinpublik.component';
import { OrdlistaComponent } from './maincontent/publik/ordlista/ordlista.component';
import { VarforgoradetComponent } from './maincontent/publik/varforgoradet/varforgoradet.component';
import { RegisterComponent } from './shared/register/register.component';
import { QuizComponent } from './main/ajquiz/quiz/quiz.component';
import { AuthGuardGuard } from './core/authGuard/auth-guard.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions, PreloadAllModules } from '@angular/router';
import { StartComponent } from './main/start/start.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';
import { IntroduktionComponent } from './maincontent/publik/introduktion/introduktion.component';
import { GenericComponent } from './maincontent/generic/generic.component';
import { GenericIntervjuComponent } from './maincontent/generic-intervju/generic-intervju.component';

const routerOptions: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  preloadingStrategy: PreloadAllModules,
};
const routes: Routes = [
  { path: '',  redirectTo: 'hem', pathMatch: 'full' },
{ path: 'hem', component: StartComponent },
{ path: 'guide',
  loadChildren: './maincontent/maincontent.module#MaincontentModule',
  canActivate: [AuthGuardGuard]
},
{ path: 'introduktion', component: IntroduktionComponent, data: { bodyClass: 'body-1' }  },
{ path: 'varforgoradet', component: VarforgoradetComponent, data: { bodyClass: 'body-1' }  },
{ path: 'quiz', component: QuizComponent, data: { bodyClass: 'body-1' }},
{ path: 'register', component: RegisterComponent, data: { bodyClass: 'reg-color'}  },
{ path: 'c/hur-val-kanner-du-din-publik', component: HurvalkannerdudinpublikComponent, data: { bodyClass: 'quizz-color'}},
{ path: 'd/vem-ska-locka-en-motvillig-publik-och-hur', component: VemskalockaenmotvilligpublikochhurComponent, data: { bodyClass: 'body-1' }  },
{ path: 'c/video/:slug',component: IntervjuHeatherComponent },
{ path: 'c/intervju/:slug',component: GenericIntervjuComponent, data: { bodyClass: 'intervju'} },
{ path: 'd/intervju/:slug',component: GenericIntervjuComponent, data: { bodyClass: 'intervju'} },
{ path: 'intervju/:slug',component: GenericIntervjuComponent, data: { bodyClass: 'intervju'} },
{ path: 'b/:slug',component: GenericComponent },
{ path: 'c/:slug',component: GenericComponent },
{ path: 'd/:slug',component: GenericComponent },
{ path: 'mains/:slug', component: GenericComponent, data: { bodyClass: 'ord-color'}},
{ path: 'main/:slug',component: GenericComponent, data: { bodyClass: 'material-color'} },
{ path: '**',  component: Err404pageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
