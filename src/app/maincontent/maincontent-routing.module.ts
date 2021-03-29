import { MaincontentComponent } from './maincontent/maincontent.component';
import { GenericContentComponent } from './generic-content/generic-content.component';
import { GuidestartComponent } from './guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const maincontentRoutes: Routes = [
    {
        path: '', component: MaincontentComponent,
        children:[
            {path:'',component: GuidestartComponent },
            {path:'test',component: GenericContentComponent },
            {path:':slug',component: GenericContentComponent},

          ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(maincontentRoutes)],
  exports: [RouterModule]
})
export class maincontentRoutingModule { }
