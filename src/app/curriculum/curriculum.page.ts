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
      {fecha: 'Agosto 2022 – Agosto 2023', desc: 'L3 Harris - Ingeniera de Software'}, 
      {fecha: 'Mayo 2021 – Julio 2021', desc: 'L3 Harris - Intern'},
      {fecha: 'Junio 2020 – Agosto 2020', desc: 'Verizon - Intern'},
      {fecha: 'Mayo 2019 – Agosto 2019', desc: 'Hewlett Packard Enterprise - Intern'},
      {fecha: 'Junio 2018 – Agosto 2018', desc: 'AbbVie - Intern'},
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
