import { Global } from './../../core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generic-extra',
  templateUrl: './generic-extra.component.html',
  styleUrls: ['./generic-extra.component.scss']
})
export class GenericExtraComponent implements OnInit {

  htmlPageData:any=[];
  currpageSlug:any;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router,) {
     this.glb.VisaMainNav= false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');

      this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getMaindata(this.currpageSlug);
      })
      this.getMaindata(this.currpageSlug);

    });
  }

  getMaindata(slug:string){
    console.log("visa denna slugg: " +this.currpageSlug);
    this.wpApi.getPageSlug(slug).subscribe(Response => {

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      };

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }

 public goBack(){
    this._location.back();
  }

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }

  isTom(val:any){
    return !this.glb.isEmptyObj(val);
  }
}
