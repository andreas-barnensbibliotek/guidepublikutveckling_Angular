import { Global } from './../../../core/Models/global';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vemskalockaenmotvilligpublikochhur',
  templateUrl: './vemskalockaenmotvilligpublikochhur.component.html',
  styleUrls: ['./vemskalockaenmotvilligpublikochhur.component.scss']
})
export class VemskalockaenmotvilligpublikochhurComponent implements OnInit {
  videoUrl:any;
  dangerousVideoUrl:any = 'https://www.youtube.com/embed/';
  showVideobox:boolean = false;
  htmlPageData:any=[];
  currpageSlug:any;

  // testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  // testid:string = "25370939";
  // videoUrl2:any;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer) {
    this.glb.VisaMainNav= false;

    // this.updateVimeoVideoUrl(this.testid) //initiera så att det inte blir crossscriptrequest error
  }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){

    this.wpApi.getPageSlug("vem-ska-locka-en-motvillig-publik-och-hur").subscribe(Response => {

      this.htmlPageData = Response

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      };

      // console.log("detta visas: " + this.htmlPageData[0]?.acf.link_item1);
      if(this.htmlPageData[0]?.acf.link_item1!=""){
        // console.log("detta: " +this.htmlPageData[0]?.acf.link_item1)
        this.showVideobox= true;
        this.updateVimeoVideoUrl(this.htmlPageData[0]?.acf.link_item1);
      }else{
        this.showVideobox= false;
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
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl + id.trim());

  }
}
