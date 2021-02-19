

import { Subject } from 'rxjs';
import { Router } from '@angular/router';

// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://centrestageonline.org";
  private _devserver:string = "https://dev.centrestageonline.org";
  private _localdevserver:string = "http://localhost:81/centrestageonline.org";
  private _wpApi:string = "/wpAdmin/wp-json/wp/v2/";
  private _wpApiPost:string = "/wpAdmin/wp-json/addreg/v2/";

  // storageHandler:LocalStorageHandler

  userregistered:string = ""

  server:string = this._devserver + this._wpApi;
  postserver:string = this._devserver + this._wpApiPost;
  devkey:string = "/devkey/alf/?type=json";

  constructor(private router: Router) {

  }



  public isUserRegistred(){

    console.log("registered: " +localStorage.getItem("userreg"));
    // if(this.userregistered){
    //   return true;
    // }else{
    //   //this.RedirectNotRegisterd();
    //   return false;
    // }
    return !!localStorage.getItem("userreg");
  }
  public registerUser(){
    try{
      localStorage.setItem("userreg", "true");
      this.router.navigate(['/episodes']);
      return true;
    }catch{
      return false;
    };
  }
  // RedirectNotRegisterd(){
  //   this.router.navigate(['/register']);
  // }

  public isEmptyObj = (obj:any) => {
    return obj === null || undefined
        ? true
        : (() => {
            for (const prop in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
              }
            }
            return true;
          })();
    };

    public getCookieText(){
    //  return this._cookieHandler.getCookieSettings();
    }

    public getlangFormButtonText(){
      // return this._formButtonObj.getRegFormLanguageText(this.getUserShortLanguage());
    }
}
