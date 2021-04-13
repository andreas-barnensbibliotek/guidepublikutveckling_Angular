import { VilketarnastastegComponent } from './privat/vilketarnastasteg/vilketarnastasteg.component';
import { VardetvartdetComponent } from './privat/vardetvartdet/vardetvartdet.component';
import { VadbehovernipafardenComponent } from './privat/vadbehovernipafarden/vadbehovernipafarden.component';
import { VilkaverktygbehoverniComponent } from './privat/vilkaverktygbehoverni/vilkaverktygbehoverni.component';
import { HurvetniattnikommitframComponent } from './privat/hurvetniattnikommitfram/hurvetniattnikommitfram.component';
import { HurskanitaerditComponent } from './privat/hurskanitaerdit/hurskanitaerdit.component';
import { VilkavillnihaombordComponent } from './privat/vilkavillnihaombord/vilkavillnihaombord.component';
import { VarvillninaComponent } from './privat/varvillnina/varvillnina.component';
import { VarbefinnerniernuComponent } from './privat/varbefinnerniernu/varbefinnerniernu.component';
import { MaincontentComponent } from './maincontent.component';

import { GuidestartComponent } from './privat/guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';

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
            {path:'vilka-verktyg-behover-ni',component: VilkaverktygbehoverniComponent },
            {path:'vad-behover-ni-pa-farden',component: VadbehovernipafardenComponent },
            {path:'var-det-vart-det',component: VardetvartdetComponent },
            {path:'vilket-ar-nasta-steg',component: VilketarnastastegComponent },
            {path:'f/:slug',component: GenericComponent },
            {path:'g/:slug',component: GenericComponent },
            {path:'h/:slug',component: GenericComponent },
            {path:'i/:slug',component: GenericComponent },
            {path:'j/:slug',component: GenericComponent },
            {path:'k/:slug',component: GenericComponent },
            {path:'l/:slug',component: GenericComponent },
            {path:'m/:slug',component: GenericComponent },
            {path:'n/:slug',component: GenericComponent },
            {path:'o/:slug',component: GenericComponent },
            {path:':slug',component: GenericComponent},

          ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(maincontentRoutes)],
  exports: [RouterModule]
})
export class maincontentRoutingModule { }
