import { maincontentRoutingModule } from './maincontent-routing.module';
import { GuidestartComponent } from './guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSpineComponent } from './publik/c-spine/c-spine.component';
import { DSpineComponent } from './publik/d-spine/d-spine.component';
import { FSpineComponent } from './privat/f-spine/f-spine.component';
import { MaincontentComponent } from './maincontent/maincontent.component';



@NgModule({
  declarations: [
    GuidestartComponent,
    CSpineComponent,
    DSpineComponent,
    FSpineComponent,
    MaincontentComponent
  ],
  imports: [
    CommonModule,
    maincontentRoutingModule,
  ],
  exports:[
    GuidestartComponent,
    CSpineComponent,
    DSpineComponent,
    maincontentRoutingModule
  ]
})
export class MaincontentModule { }
