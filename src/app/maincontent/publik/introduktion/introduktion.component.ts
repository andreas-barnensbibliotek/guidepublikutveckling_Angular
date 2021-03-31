import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit} from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-introduktion',
  templateUrl: './introduktion.component.html',
  styleUrls: ['./introduktion.component.scss']
})
export class IntroduktionComponent implements OnInit{

  htmlPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("Introduktion").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }
}
