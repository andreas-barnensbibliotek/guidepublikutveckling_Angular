import { Router } from '@angular/router';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-vilketarnastasteg',
  templateUrl: './vilketarnastasteg.component.html',
  styleUrls: ['./vilketarnastasteg.component.scss']
})
export class VilketarnastastegComponent implements OnInit {

  htmlPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global, private router: Router) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("vilket-ar-nasta-steg").subscribe(Response => {

      this.htmlPageData = Response
      console.log(this.htmlPageData)
    });
  }
}
