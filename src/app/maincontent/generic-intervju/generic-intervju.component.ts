import { Global } from './../../core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generic-intervju',
  templateUrl: './generic-intervju.component.html',
  styleUrls: ['./generic-intervju.component.scss']
})
export class GenericIntervjuComponent implements OnInit {

  htmlPageData:any=[];
  currpageSlug:any;
  placeholderblock:boolean= false;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router,) {
     this.glb.VisaMainNav= false;
  }

  ngOnInit(): void {
    this.showPlaceholder(true);

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
      // console.log(this.htmlPageData)
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
