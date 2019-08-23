import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Obtener el año automáticamente en el footer
  
// Obtener datos del archivo JSON mediante el servicio
  constructor(public InfoPage: InfoPaginaService ) { }

  ngOnInit() {
  }
  anio: number = new Date().getFullYear();
}
