import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : any = []; 
  imagemLargura = 50; 
  imagemMargem = 2; 
  isMostrarImagem = false; 
   
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos(); 
  }

  alternarImagem(){
    this.isMostrarImagem = !this.isMostrarImagem; 
  }

  getEventos(){
    this.http.get("http://localhost:5000/WeatherForecast").
    subscribe(response => {this.eventos = response
    console.log(response)},
      
      error =>{
        console.log(Error);
      }); 
  }

}
