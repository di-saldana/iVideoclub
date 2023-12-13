import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Videoclub ngOnInit');
  }
  ngOnDestroy() {
    console.log('Videoclub ngOnDestroy');
  }
  ionViewDidEnter() {
    console.log('Videoclub ionViewDidEnter');
  }
  ionViewWillEnter() {
    console.log('Videoclub ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('Videoclub ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('Videoclub ionViewDidLeave');
  }
}
