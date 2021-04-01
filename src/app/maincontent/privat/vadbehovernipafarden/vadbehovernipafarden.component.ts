import { Router } from '@angular/router';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-vadbehovernipafarden',
  templateUrl: './vadbehovernipafarden.component.html',
  styleUrls: ['./vadbehovernipafarden.component.scss']
})
export class VadbehovernipafardenComponent implements OnInit {

  htmlPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global, private router: Router) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("vad-behover-ni-pa-farden").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }
}
