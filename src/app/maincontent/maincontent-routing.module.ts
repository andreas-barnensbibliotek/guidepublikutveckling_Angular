import { HurvetniattnikommitframComponent } from './privat/hurvetniattnikommitfram/hurvetniattnikommitfram.component';
import { HurskanitaerditComponent } from './privat/hurskanitaerdit/hurskanitaerdit.component';
import { VilkavillnihaombordComponent } from './privat/vilkavillnihaombord/vilkavillnihaombord.component';
import { VarvillninaComponent } from './privat/varvillnina/varvillnina.component';
import { VarbefinnerniernuComponent } from './privat/varbefinnerniernu/varbefinnerniernu.component';
import { MaincontentComponent } from './maincontent.component';
import { GenericContentComponent } from './generic-content/generic-content.component';
import { GuidestartComponent } from './privat/guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const maincontentRoutes: Routes = [
    {
        path: '', component: MaincontentComponent,
        children:[
            {path:'',component: GuidestartComponent },
            {path:'var-befinner-ni-er-nu',component: VarbefinnerniernuComponent },
            {path:'vart-vill-ni-na',component: VarvillninaComponent },
            {path:'vilka-vill-ni-ha-ombord',component: VilkavillnihaombordComponent },
            {path:'hur-ska-ni-ta-er-dit',component: HurskanitaerditComponent },
            {path:'hur-vet-ni-att-ni-kommit-fram',component: HurvetniattnikommitframComponent },
            {path:'vart-vill-ni-na',component: VarvillninaComponent },
            {path:':slug',component: GenericContentComponent},

          ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(maincontentRoutes)],
  exports: [RouterModule]
})
export class maincontentRoutingModule { }
