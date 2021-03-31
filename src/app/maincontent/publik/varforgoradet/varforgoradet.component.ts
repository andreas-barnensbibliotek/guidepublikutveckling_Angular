import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-varforgoradet',
  templateUrl: './varforgoradet.component.html',
  styleUrls: ['./varforgoradet.component.scss']
})
export class VarforgoradetComponent implements OnInit {

  htmlPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("varforgoradet").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }
}
