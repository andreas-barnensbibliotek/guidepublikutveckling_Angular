import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from 'src/app/core/Models/global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  mainPageData:any=[];
  formlangdata:any;
  userdata:any;
  regFormgoup!:FormGroup;
  tmpAllLanguages:{};
  emailPattern:any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  get formlanguage() { return this.regFormgoup.get('txtformlanguage')}

  constructor( private _global:Global, private fb: FormBuilder, private _router:Router, private _wpApi:WpApiService) {
    this.tmpAllLanguages = "" // _global.getUserGuidLanguage();
  }

    get txtRegnamn():any {
      return this.regFormgoup.get('txtRegnamn');
    }
    get txtRegOrganisation(): any {
      return this.regFormgoup.get('txtRegOrganisation');
    }
    get txtRegRoll(): any {
      return this.regFormgoup.get('txtRegRoll');
    }
    get txtRegEpost(): any {
       return this.regFormgoup.get('txtRegEpost');
    }
    get chkboxregConfirm(): any {
      return this.regFormgoup.get('chkboxregConfirm');
   }


  ngOnInit(): void {
    this.loadFormSettings();
  }

  loadFormSettings(){
    this.regFormgoup = this.fb.group({
      txtRegnamn: ['', Validators.required],
      txtRegOrganisation:['', Validators.required],
      txtRegRoll:['', Validators.required],
      txtRegEpost:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      chkboxregConfirm:[''],
    });

  }

  onSubmit(){
    console.log("submittat")
    if (this.regFormgoup.valid){
      let registerobj= {
        post_title : "Register user - " + this.regFormgoup.get('txtRegnamn')!.value,
        namn: this.regFormgoup.get('txtRegnamn')!.value,
        organisation: this.regFormgoup.get('txtRegOrganisation')!.value,
        roll: this.regFormgoup.get('txtRegRoll')!.value,
        approve: this.regFormgoup.get('chkboxregConfirm')!.value,
        epost: this.regFormgoup.get('txtRegEpost')!.value,
      };

      this.registerUserDB(registerobj);
    };
  }

  registerUserDB(regData:any){

    this._wpApi.postRegisterUser(JSON.parse(JSON.stringify(regData))).subscribe((response)=>{
     console.log("detta är efter post");
      this._global.registerUser();
      this._router.navigate(['/guide']);
    });

  }
}
