import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})

export class AutorPage implements OnInit, OnDestroy {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  };

  constructor() {
    this.autor = {name: 'Dianelys Saldaña', email: 'dsl42@alu.ua.es', twitter: '@saldana_di', phone: '658 718 635'};
  }

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
