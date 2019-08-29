import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "../interfaces/producto.interfaces";

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
      .get("https://angular-html-c30ce.firebaseio.com/productos_idx.json")
      //  La respuesta será del tipo producto como se llama nuestra interface
      .subscribe((resp: Product[]) => {
        this.productos = resp;
        // Variable para el loading
        this.cargando = false;
        //  console.log(resp);
      });
  }
}
