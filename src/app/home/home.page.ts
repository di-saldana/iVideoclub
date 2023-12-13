import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    console.log('HomePage ngOnInit');
  }
  ngOnDestroy() {
    console.log('HomePage ngOnDestroy');
  }
  ionViewDidEnter() {
    console.log('HomePage ionViewDidEnter');
  }
  ionViewWillEnter() {
    console.log('HomePage ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('HomePage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('HomePage ionViewDidLeave');
  }
}
