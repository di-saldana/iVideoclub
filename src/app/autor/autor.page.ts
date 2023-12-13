import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Autor ngOnInit');
  }
  ngOnDestroy() {
    console.log('Autor ngOnDestroy');
  }
  ionViewDidEnter() {
    console.log('Autor ionViewDidEnter');
  }
  ionViewWillEnter() {
    console.log('Autor ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('Autor ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('Autor ionViewDidLeave');
  }
}
