import { Global } from './../core/Models/global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor(public glb:Global) { }

  ngOnInit(): void {
  }

}
