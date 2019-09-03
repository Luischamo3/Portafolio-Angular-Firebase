import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/producto.interfaces';
import { Subscriber } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Variable que sirve para crear el Loading
  cargando = true;
  productos: Product[] = [];
  productosFiltrado: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProduct();
  }

  private loadProduct() {
//  Creamos una promesa para
// evitar que el array de productor
//  no ejecute las funciones
//   siguientes hasta que no
//   contenga valores

    return new Promise((resolve, reject) => {
      this.http
      .get('https://angular-html-c30ce.firebaseio.com/productos_idx.json')
      .subscribe((resp: Product[]) => {
        //  La respuesta será del tipo producto como se llama nuestra interface
        this.productos = resp;
        // Variable para el loading
        this.cargando = false;
        resolve();
      });
    });
  }
  getProducto(id: string) {
    // this.cargando = false;
    return this.http.get (
        `https://angular-html-c30ce.firebaseio.com/productos/${id}.json`
      );
  }

  buscarProducto( termino: string) {

    if (this.productos.length === 0) {
      // Cargar Productos
      // 'then' ejecuta e lcódigo después
      // que la función termina
      this.loadProduct().then(() => {
        // ejecutar después
        // de tener los productos
          // Aplicar filtro
          this.filterProducts( termino );
      });
    } else {
      // Aplicar el filtro
      this.filterProducts( termino );
    }
    // Regresa un nuevo Array sobre el array de productos
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    } );
    // console.log(this.productosFiltrado);
  }

  private filterProducts( termino: string) {
     console.log(this.productos);
     // Descargamos el array y lo dejamos vacío
     this.productosFiltrado = [];
     this.productos.forEach( prod => {
      /* Si el elemento que
      se encuentra en el array
      contien algo de lo que
      el usuario
      introduce por el buscador */

      if (prod.categoria.indexOf( termino) >= 0 || prod.titulo.indexOf( termino) >= 0 ) {
        this.productosFiltrado.push( prod );
        console.log(prod);
      }
    });

  }

}
