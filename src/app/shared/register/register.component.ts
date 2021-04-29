import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from './../../core/Models/global';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  htmlPageData:any=[];
  currpageSlug:any;
  placeholderblock:boolean= false;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router,) {
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
    this.wpApi.getPageSlug("registrering").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
      this.showPlaceholder(false);
    });
  }
 public goBack(){
    this._location.back();
  }

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }

  showPlaceholder(status:boolean){
    this.placeholderblock= status;
  }
}
