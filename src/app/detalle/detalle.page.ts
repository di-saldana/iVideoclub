import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  id: any;
  pelicula: any;

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.pelicula = this.peliculasService.getPelicula(this.id);
  }



}
