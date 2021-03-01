import { Global } from './../../core/Models/global';
// import { WpApiService } from './../../services/wp-Api/wp-api.service';
// import { registerUserFormData } from './../models/RegisteruserFormData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mainPageData:any=[];
  formlangdata:any;
  userdata:any;
  regFormgoup!:FormGroup;
  tmpAllLanguages:{};
  get formlanguage() { return this.regFormgoup.get('txtformlanguage')}

  constructor( private _global:Global, private fb: FormBuilder) {
    this.tmpAllLanguages = "" // _global.getUserGuidLanguage();
  }

    get txtfirstname():any {
      return this.regFormgoup.get('txtfirstname');
    }
    get txtcountry(): any {
      return this.regFormgoup.get('txtcountry');
    }
    get txtlastname(): any {
      return this.regFormgoup.get('txtlastname');
    }
    get radiogender(): any {
       return this.regFormgoup.get('radiogender');
    }
    get txtcomments(): any {
      return this.regFormgoup.get('txtcomments');
    }
    get txtprofession(): any {
      return this.regFormgoup.get('txtprofession');
    }
    get txtemail(): any {
      return this.regFormgoup.get('txtemail');
    }
    // get drpChooselang(): any {
    //   return this.regFormgoup.get('drpChooselang');
    // }


  ngOnInit(): void {
    // this._global.currentLanguageHandler.subscribe(()=>{
    //   this.loadFormSettings();
    // });
    // this._wpApi.currentPageDataHandler.subscribe(()=>{
    //   this.getpagedata();
    // })
    this.loadFormSettings();
    this.getpagedata();
  }

  selectLanguageChangeHandler (event: any) {
    //update the ui
    let lang = event.target.value;
    // this._global.setUserLanguage(lang);
    this.getpagedata();
  }

  getpagedata(){
    // this._wpApi.getPageSlug("register").subscribe(Response => {
    //   this.mainPageData = Response
    //   console.log(this.mainPageData)
    // });
  }


  loadFormSettings(){

    this.regFormgoup = this.fb.group({
      // drpChooselang:['', Validators.required],
      txtfirstname: ['', Validators.required],
      txtlastname:['', Validators.required],
      radiogender:['', Validators.required],
      txtcomments:[''],
      txtcountry:['', Validators.required],
      txtorganisation:[''],
      txtprofession:['', Validators.required],
      txtemail:['', Validators.required]
    })

    // let defaultDrpFullLanguageValue= this._global.getUserfullLanguage(CurrentShortLanguage);
    // this.regFormgoup.patchValue({ drpChooselang: defaultDrpFullLanguageValue });
  }

  onSubmit(){
    if (this.regFormgoup.valid){

      // let registerobj= {
      //   post_title : "Register user - " + this.regFormgoup.get('txtcountry').value,
      //   country: this.regFormgoup.get('txtcountry').value,
      //   // language: this.regFormgoup.get('drpChooselang').value,
      //   gender: this.regFormgoup.get('radiogender').value,
      //   comments: this.regFormgoup.get('txtcomments').value,
      //   // befattning: this.regFormgoup.get('txtprofession').value,
      //   profession: this.regFormgoup.get('txtprofession').value,
      //   firstname: this.regFormgoup.get('txtfirstname').value,
      //   lastname: this.regFormgoup.get('txtlastname').value,
      //   organisation: this.regFormgoup.get('txtorganisation').value,
      //   email: this.regFormgoup.get('txtemail').value,
      // };

      // this.registerUserDB(registerobj);
    };
  }

  registerUserDB(regData:any){

    // this._wpApi.postRegisterUser(JSON.parse(JSON.stringify(regData))).subscribe((response)=>{
    //   console.log("detta är efter post"+ response);
    //   this._global.registerUser();
    // });

  }
}
