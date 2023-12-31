import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculas-api.service'

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {
  id: any;
  listaPeliculas: any[] = [];
  modoLista = true;

  constructor(private router: Router, private peliculasAPIService: PeliculasAPIService) {}

  ngOnInit() {
    console.log('Videoclub ngOnInit');
    this.listaPeliculas = this.peliculasAPIService.peliculas;
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

  verPaginaDetalle(id: any): void {
    this.router.navigate(['/detalle', id]);
  }
  
  cambiarVista(): void {
    this.modoLista = !this.modoLista;
  }

}
