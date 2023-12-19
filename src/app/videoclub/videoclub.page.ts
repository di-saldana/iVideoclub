import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service'

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {
  id: any;
  listaPeliculas: any[]
  modoLista = true;

  constructor(private router: Router, private peliculasService: PeliculasService) {
    this.listaPeliculas = peliculasService.getPeliculas()
  }

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

  verPaginaDetalle(id: any): void {
    this.router.navigate(['/detalle', id]);
  }
  
  cambiarVista(): void {
    this.modoLista = !this.modoLista;
  }

}
