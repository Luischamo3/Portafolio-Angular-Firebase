import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina  = {};
  cargada = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de Infopagina Listo');

    // Leer el archivo JSON y tomar sus propiedades para que puedan ser utilizadas en las páginas
    this.http.get('assets/data-pagina.json')
      .subscribe((resp: Infopagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
