import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasAPIService {
  APIep: string = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';
  peliculas: any[] = []; 

  constructor(public http: HttpClient) {
    this.getPeliculas().subscribe(
      (      result: any[]) => {
        this.peliculas = result;
      },
      (      err: any) => {
        console.log(err);
      }
    );
  }

  getPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.APIep);
  }

  getPelicula(id: any): Observable<any> {
    return this.http.get<any>(this.APIep + '/' + id);
  }
  
}
