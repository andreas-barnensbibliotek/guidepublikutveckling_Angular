import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, Renderer2 } from '@angular/core';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';

import { Subscription } from 'rxjs';
import { Global } from './core/Models/global';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
   //keep refs to subscriptions to be able to unsubscribe later
  popupOpenSubscription: Subscription = new Subscription;
  // statusChangeSubscription: Subscription = new Subscription;
  logg:any;
  title = 'guidepublikutveckling';

  constructor( @Inject(DOCUMENT) private document:any,
  private renderer: Renderer2,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private ccService: NgcCookieConsentService,
  public glb:Global){}

  ngOnInit() {
 // Support for translated cookies messages
      this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {});

      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) => {
        if(event.bodyClass){
          this.updateBodyClass(event.bodyClass)
        }else{
          this.updateBodyClass("body-1")
        }
        });

        // Använd denna för att tabort alla cookies om anv clickar deny i NgcCookieConsent (glöm inte unsubscribe)
        // this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
        //   (event: NgcStatusChangeEvent) => {
        //       if(event.status==='deny'){
        //         this.glb.deleteAllCookies();
        //       }
        // });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    // this.statusChangeSubscription.unsubscribe();
  }

  private updateBodyClass(customBodyClass?: string) {
    this.renderer.setAttribute(this.document?.body, 'class', '');
    if (customBodyClass) {
      this.renderer.addClass(this.document?.body, customBodyClass);
    }
  }

}
