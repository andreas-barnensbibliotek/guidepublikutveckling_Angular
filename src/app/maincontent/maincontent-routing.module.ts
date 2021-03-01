import { GuidestartComponent } from './guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const maincontentRoutes: Routes = [ 
    {
        path: '', component: GuidestartComponent,
        children:[
            {path:'',component: GuidestartComponent },
                       
          ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(maincontentRoutes)],
  exports: [RouterModule]
})
export class maincontentRoutingModule { }