import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
/* Llamamos la servicio que
proporcionará los datos almacenados
 en nuestra base de datos */
  constructor(public itemService: ProductosService ) { }

  ngOnInit() {
  }
}
