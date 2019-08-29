import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.LoadInfo();
    this.LaodEquipo();
  }

  private LoadInfo() {
    // console.log('Servicio de Infopagina Listo');
    // Leer el archivo JSON y tomar sus propiedades para que puedan ser utilizadas en las páginas
    this.http.get('assets/data-pagina.json')
      .subscribe((resp: Infopagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private LaodEquipo() {
    // Leer datos de Firebase
    this.http.get('https://angular-html-c30ce.firebaseio.com/equipo.json')
    .subscribe( ( resp: any[] ) => {
      this.equipo = resp;
      //  console.log(resp);
    });
  }
}
