import { HurvalkannerdudinpublikComponent } from './maincontent/publik/C/hurvalkannerdudinpublik/hurvalkannerdudinpublik.component';
import { OrdlistaComponent } from './maincontent/publik/ordlista/ordlista.component';
import { RegisterComponent } from './shared/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjquizModule } from './main/ajquiz/ajquiz.module';
import { MaincontentModule } from './maincontent/maincontent.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

import { Global } from './core/Models/global';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StartComponent } from './main/start/start.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';

import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { IntroduktionComponent } from './maincontent/publik/introduktion/introduktion.component';
import { VarforgoradetComponent } from './maincontent/publik/varforgoradet/varforgoradet.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'dev.guidepublikutveckling.se' //'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#222'
    },
    button: {
      background: '#111'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}<p>
      <a aria-label="learn more about cookies" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noreferrer">{{cookiePolicyLink}}</a>
      </p></span>
    `,
  },
  content:{
    message: 'På guidepublikutveckling.se använder vi cookies för att ge dig en bra användarupplevelse. Genom att använda cookies så slipper du som användare registrera dej flera gånger för att få tillgång till guiden. Väljer du att Tillåta kakor/coockies på vår webplats, godkänner du att vi använder cookies och browserstorage.',

    cookiePolicyLink: 'Läs mer om cookie/kakor',
    cookiePolicyHref: 'https://www.cookiesandyou.com/',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',

    tosLink: 'hantering av Service',
    tosHref: 'https://www.vgregion.se/kulturutveckling',
    header: 'Kakor används på denna webbplats. Cookies used on the website!',
    dismiss: 'avböj!',
    allow: 'Tillåt kakor/ cookies',
    deny: 'Avböj',
    link: 'läs mer',
    policy: 'Kakor Policy'
  }
};


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Err404pageComponent,
    MainNavComponent,
    MainFooterComponent,
    RegisterComponent,
    IntroduktionComponent,
    VarforgoradetComponent,
    OrdlistaComponent,
    ScrollToTopComponent,
    HurvalkannerdudinpublikComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    MaincontentModule,
    AjquizModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Global,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
