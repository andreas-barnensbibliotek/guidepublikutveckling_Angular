import { RegisterComponent } from './shared/register/register.component';
import { QuizComponent } from './main/ajquiz/quiz/quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './main/start/start.component';
import { GuidestartComponent } from './maincontent/guidestart/guidestart.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';

const routes: Routes = [
  { path: '',  redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'guidestart', component: GuidestartComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**',  component: Err404pageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
