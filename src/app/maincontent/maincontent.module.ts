import { GuidestartComponent } from './guidestart/guidestart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSpineComponent } from './publik/c-spine/c-spine.component';
import { DSpineComponent } from './publik/d-spine/d-spine.component';



@NgModule({
  declarations: [
    GuidestartComponent,
    CSpineComponent,
    DSpineComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GuidestartComponent,
    CSpineComponent,
    DSpineComponent
  ]
})
export class MaincontentModule { }
