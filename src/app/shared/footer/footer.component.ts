import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //Obtener el año automáticamente en el footer
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
