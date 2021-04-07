import { Global } from 'src/app/core/Models/global';
import { WpApiService } from './../../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  testid:string = "25370939";
  videoUrl2:any;

  constructor(private wpApi:WpApiService, private glb:Global, private _sanitizer: DomSanitizer) {
    this.updateVimeoVideoUrl("") //initiera så att det inte blir crossscriptrequest error
    // this.videoUrl2= this._sanitizer.bypassSecurityTrustResourceUrl("");
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  ngOnInit(): void {

  }

  getMaindata(){
    this.wpApi.getPageSlug("Introduktion").subscribe(Response => {

      this.htmlPageData = Response;
      this.showVideobox= true;
      this.updateVimeoVideoUrl(this.testid);
      console.log(this.htmlPageData);
    });
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
