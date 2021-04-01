import { maincontentRoutingModule } from './maincontent-routing.module';
import { GuidestartComponent } from './privat/guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaincontentComponent } from './maincontent.component';
import { GuideNavComponent } from '../shared/guide-nav/guide-nav.component';
import { GenericComponent } from './publik/generic/generic.component';
import { VarbefinnerniernuComponent } from './privat/varbefinnerniernu/varbefinnerniernu.component';
import { VarvillninaComponent } from './privat/varvillnina/varvillnina.component';
import { VilkavillnihaombordComponent } from './privat/vilkavillnihaombord/vilkavillnihaombord.component';
import { HurskanitaerditComponent } from './privat/hurskanitaerdit/hurskanitaerdit.component';
import { HurvetniattnikommitframComponent } from './privat/hurvetniattnikommitfram/hurvetniattnikommitfram.component';
import { VilkaverktygbehoverniComponent } from './privat/vilkaverktygbehoverni/vilkaverktygbehoverni.component';
import { VadbehovernipafardenComponent } from './privat/vadbehovernipafarden/vadbehovernipafarden.component';
import { VardetvartdetComponent } from './privat/vardetvartdet/vardetvartdet.component';
import { VilketarnastastegComponent } from './privat/vilketarnastasteg/vilketarnastasteg.component';



@NgModule({
  declarations: [
    GuidestartComponent,
    MaincontentComponent,
    GuideNavComponent,
    GenericComponent,
    VarbefinnerniernuComponent,
    VarvillninaComponent,
    VilkavillnihaombordComponent,
    HurskanitaerditComponent,
    HurvetniattnikommitframComponent,
    VilkaverktygbehoverniComponent,
    VadbehovernipafardenComponent,
    VardetvartdetComponent,
    VilketarnastastegComponent

  ],
  imports: [
    CommonModule,
    maincontentRoutingModule,
  ],
  exports:[
    GuidestartComponent,
    maincontentRoutingModule
  ]
})
export class MaincontentModule { }
