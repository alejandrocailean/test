import { ErrorHandler, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginGuard} from './componentes/Guards/login.guard'
import { AdivinaElNumeroComponent } from './componentes/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/Juegos/anagrama/anagrama.component';
import { CardsComponent } from './componentes/Juegos/cards/cards.component';
import { PiedraPapelTijeraComponent } from './componentes/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './componentes/Juegos/tateti/tateti.component';
import { LoginComponent } from './componentes/Pages/login/login.component';
import { RutaAboutComponent } from './componentes/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/ruta-home/ruta-home.component';
import { RutaJuegosComponent } from './componentes/ruta-juegos/ruta-juegos.component';
import { RutaResultadosComponent } from './componentes/ruta-resultados/ruta-resultados.component';


const routes: Routes = [
  {path:"",component:RutaHomeComponent},
  {path:"ruta-juegos",component:RutaJuegosComponent,
  canActivate:[LoginGuard],
    children: [
      {path:'ruta-adivina-el-numero', component:AdivinaElNumeroComponent},
      {path:'ruta-agilidad-aritmetica', component:AgilidadAritmeticaComponent},
      {path:'ruta-anagrama',component:AnagramaComponent},
      {path:'ruta-piedra-papel-tijera',component:PiedraPapelTijeraComponent},
      {path:'ruta-tateti',component:TatetiComponent},
      {path:'ruta-cards',component:CardsComponent}
    ]
  },
  {path:'login',component:LoginComponent},
  {path:"ruta-about",component:RutaAboutComponent},
  {path:"ruta-resultados",component:RutaResultadosComponent},  
  {path:"**",component:ErrorHandler}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
