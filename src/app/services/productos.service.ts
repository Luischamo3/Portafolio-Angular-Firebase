import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "../interfaces/producto.interfaces";
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  // Variable que sirve para crear el Loading
  cargando = true;
  productos: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProduct();
  }

  private loadProduct() {
    this.http
      .get('https://angular-html-c30ce.firebaseio.com/productos_idx.json')
      .subscribe((resp: Product[]) => {
        //  La respuesta será del tipo producto como se llama nuestra interface
        this.productos = resp;
        // Variable para el loading
        this.cargando = false;
      });
  }
  getProducto(id: string) {
    // this.cargando = false;
    return this.http.get (
        `https://angular-html-c30ce.firebaseio.com/productos/${id}.json`
      );
  }
}
