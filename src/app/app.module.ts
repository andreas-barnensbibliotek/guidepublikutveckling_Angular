import { HurvalkannerdudinpublikComponent } from './maincontent/publik/hurvalkannerdudinpublik/hurvalkannerdudinpublik.component';
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
import { GenericContentComponent } from './maincontent/generic-content/generic-content.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { IntroduktionComponent } from './maincontent/publik/introduktion/introduktion.component';
import { VarforgoradetComponent } from './maincontent/publik/varforgoradet/varforgoradet.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'// it is recommended to set your domain, for cookies to work properly
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
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a></p>
    </span>
    `,
  },
  content:{
    message: 'På guidepublikutveckling.se använder vi cookies för att ge dig en bra användarupplevelse. Genom att bläddra vidare godkänner du att vi använder cookies och browserstorage.',

    cookiePolicyLink: 'Cookie Policy',
    cookiePolicyHref: 'https://cookie.com',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',

    tosLink: 'hantering av Service',
    tosHref: 'https://tos.com',
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
    GenericContentComponent,
    IntroduktionComponent,
    VarforgoradetComponent,
    OrdlistaComponent,
    ScrollToTopComponent,
    HurvalkannerdudinpublikComponent
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
