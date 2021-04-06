import { Global } from './../../../../core/Models/global';
import { WpApiService } from './../../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-intervju-skanes-dansteater',
  templateUrl: './intervju-skanes-dansteater.component.html',
  styleUrls: ['./intervju-skanes-dansteater.component.scss']
})
export class IntervjuSkanesDansteaterComponent implements OnInit {

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
