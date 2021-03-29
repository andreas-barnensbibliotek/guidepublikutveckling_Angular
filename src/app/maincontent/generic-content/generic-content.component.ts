import { AncorScrollServiceService } from './../../core/Service/AncorScrollService/ancor-scroll-service.service';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.scss']
})
export class GenericContentComponent implements OnInit {
  currpageSlug:string="";
  mainPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private router:Router,
    private _sanitizer: DomSanitizer,private viewPortScroller: ViewportScroller, private _anchor: AncorScrollServiceService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(prams =>{
      console.log("kollar: " + prams.get('slug'));
      this.currpageSlug = prams.get('slug') || '';

      this.getpagedata(this.currpageSlug);
    });
    this._anchor.listen();
  }

  getpagedata(slug:string){
    this.wpApi.getPageSlug(slug).subscribe(Response => {
      this.mainPageData = Response;

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      }

    });
  }




}
