import { NgModule } from '@angular/core';// importar desde esta ruta
/*Routermodule es el que le dirá a angular si estas son las rutas principales*/
import { Routes, RouterModule } from '@angular/router';// Importador de rutas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

// Array de rutas
// Rutas de mi aplicacion como funciona la misma
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  // Ruta alternativa en caso de no utilizarse el resto
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  /* Con el usehash las páginas
  sabrán que lo que viene después
   de las rutas no es una
   directorio si no que es una parte de la ruta si para estos servidores en los cuales no tenemos acceso al archivo htaccess */
  imports: [RouterModule.forRoot(app_routes,{useHash:true})],
  // Para poder utilizar el approuting-module debemos exportarlo
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
