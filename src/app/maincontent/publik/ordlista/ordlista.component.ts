import { Router } from '@angular/router';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Global } from 'src/app/core/Models/global';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ordlista',
  templateUrl: './ordlista.component.html',
  styleUrls: ['./ordlista.component.scss']
})
export class OrdlistaComponent implements OnInit, OnDestroy {

  htmlPageData:any=[];
  placeholderblock:boolean= false;

  constructor(private wpApi:WpApiService, private glb:Global, private router: Router, private _location:Location) {
     this.glb.VisaMainNav= false;
  }

  ngOnInit(): void {
    this.showPlaceholder(true);
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("ordlista").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
      this.showPlaceholder(false);
    });
  }

  goBack(){
    this._location.back();
  }

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }

  showPlaceholder(status:boolean){
    this.placeholderblock= status;
  }
}
