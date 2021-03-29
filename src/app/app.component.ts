import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
   //keep refs to subscriptions to be able to unsubscribe later
  popupOpenSubscription: Subscription = new Subscription;
  logg:any;
  title = 'guidepublikutveckling';

  constructor(private ccService: NgcCookieConsentService){}

  ngOnInit() {
 // Support for translated cookies messages
      this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {});
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
  }

}
