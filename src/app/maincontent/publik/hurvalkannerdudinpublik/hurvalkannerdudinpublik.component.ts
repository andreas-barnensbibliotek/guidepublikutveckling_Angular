import { Global } from './../../../core/Models/global';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hurvalkannerdudinpublik',
  templateUrl: './hurvalkannerdudinpublik.component.html',
  styleUrls: ['./hurvalkannerdudinpublik.component.scss']
})
export class HurvalkannerdudinpublikComponent implements OnInit, OnDestroy {

  htmlPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global,private _location:Location) {
     this.glb.VisaMainNav= false;
  }

  ngOnInit(): void {


    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("hur-val-kanner-du-din-publik").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }

  goBack(){
    this._location.back();
  }

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }
}
