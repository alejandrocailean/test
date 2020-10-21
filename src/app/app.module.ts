import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { RutaJuegosComponent } from './componentes/ruta-juegos/ruta-juegos.component';
import { RutaAboutComponent } from './componentes/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/ruta-home/ruta-home.component';
import { RutaResultadosComponent } from './componentes/ruta-resultados/ruta-resultados.component';
import { AdivinaElNumeroComponent } from './componentes/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AnagramaComponent } from './componentes/Juegos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { TatetiComponent } from './componentes/Juegos/tateti/tateti.component';
import {ListadoComponent} from '../app/componentes/Templates/listado/listado.component';
import { CardsComponent } from './componentes/Juegos/cards/cards.component';
import { CardsService } from './Servicios/Cards/cards.service';
import { MostrarMensajeService } from './Servicios/MostrarMensaje/MostrarMensaje.service';
import { LoginComponent } from './componentes/Pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaJuegosComponent,
    RutaAboutComponent,
    RutaHomeComponent,
    RutaResultadosComponent,
    AdivinaElNumeroComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    TatetiComponent,
    ListadoComponent,
    CardsComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [HttpClient,MostrarMensajeService,CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
