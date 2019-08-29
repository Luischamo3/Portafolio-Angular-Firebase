import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
/* Llamamos la servicio que
proporcionará los datos almacenados
 en nuestra base de datos */
  constructor(public infoService: InfoPaginaService ) { }
  ngOnInit() {
  }
}
