import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {

  listaTrabajos: {
    fecha: string,
    desc: string
  }[];

  constructor() {
    this.listaTrabajos = [
      {fecha: 'dd-mm-yyyy', desc: 'Trabajo 1'}, 
      {fecha: 'dd-mm-yyyy', desc: 'Trabajo 2'},
    ]
  }

  ngOnInit() {
    console.log('Curriculum ngOnInit');
  }
  ngOnDestroy() {
    console.log('Curriculum ngOnDestroy');
  }
  ionViewDidEnter() {
    console.log('Curriculum ionViewDidEnter');
  }
  ionViewWillEnter() {
    console.log('Curriculum ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('Curriculum ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('Curriculum ionViewDidLeave');
  }
}
