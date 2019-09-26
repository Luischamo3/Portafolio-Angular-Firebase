import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Product } from '../../interfaces/producto.interfaces';


@ Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cargando = true;

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute ,
               public productoService: ProductosService ) { }

  ngOnInit() {
    /* Leemos todos los parámetros recibidos por
    el URL*/
    this.route.params
        .subscribe( parametros => {
      // tslint:disable-next-line: no-string-literal
      // console.log(parametros['id']);
      // tslint:disable-next-line: no-string-literal
      this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            // console.log(producto );            
            this.id = parametros['id'];
            this.producto = producto;
          });
      });
  }
}
