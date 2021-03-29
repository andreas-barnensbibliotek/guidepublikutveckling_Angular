import { IMainMeny } from './../../core/Models/MainMeny-Interface';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  mainNavData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getNavdata();
    })
  this.getNavdata();
  }

  getNavdata(){
    this.wpApi.getMeny("Menu_Main").subscribe(Response => {

      this.mainNavData = Response
      console.log(this.mainNavData)
    });
  }
}
