import { Global } from 'src/app/core/Models/global';
import { WpApiService } from './../../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-intervju-heather',
  templateUrl: './intervju-heather.component.html',
  styleUrls: ['./intervju-heather.component.scss']
})
export class IntervjuHeatherComponent implements OnInit {
  videoUrl:any= "";
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  showVideobox:boolean = false;
  htmlPageData:any=[];
  currpageSlug:any;

  testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  testid:string = "25370939";
  videoUrl2:any;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer) {
    this.glb.VisaMainNav= false;

    this.updateVimeoVideoUrl("") //initiera så att det inte blir crossscriptrequest error

    // this.videoUrl2= this._sanitizer.bypassSecurityTrustResourceUrl("");
    // this.wpApi.currentPageDataHandler.subscribe(()=>{
    //   this.getMaindata();
    // })
    // this.getMaindata();
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

    this.wpApi.getPageSlug(slug).subscribe(Response => {

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      };

      this.htmlPageData = Response
console.log("detta visas: " + this.htmlPageData[0]?.acf.link_item1);
      if(this.htmlPageData[0]?.acf.link_item1){
        this.showVideobox= true;
        this.updateVimeoVideoUrl(this.htmlPageData[0]?.acf.link_item1);
      }

      console.log(this.htmlPageData)
    });
  }

 public goBack(){
    this._location.back();
  }

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }

  updateVimeoVideoUrl(id: string) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl + id);
  }
}
