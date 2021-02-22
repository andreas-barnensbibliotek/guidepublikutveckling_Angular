import { AuthGuardGuard } from './core/authGuard/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { StartComponent } from './main/start/start.component';
import { GuidestartComponent } from './maincontent/guidestart/guidestart.component';
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
  { path: '**',  component: Err404pageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
