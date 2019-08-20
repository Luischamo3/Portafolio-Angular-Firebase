import { Component, OnInit } from '@angular/core';

@Component({
  //selector que permite utlizar este componente como una etiqueta de HTML normal
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
