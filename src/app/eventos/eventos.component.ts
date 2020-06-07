import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {EventoService} from '../_services/Evento.service'

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
  
  /*Implementando o pipe*/
  _filtroLista: string = "";
  eventosFiltrados: any = []; 
  
  get filtroLista(): string{
    return this._filtroLista; 
  }

  set filtroLista(value: string){
    this._filtroLista = value; 
    this.eventosFiltrados = this.filtroLista ? this.filtrarEvento(this.filtroLista) : this.eventos;
  }
   
  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEventos(); 
  }

  filtrarEvento(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase(); 
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    ); 
  }

  alternarImagem(){
    this.isMostrarImagem = !this.isMostrarImagem; 
  }

  getEventos(){
    this.eventoService.getEvento().
    subscribe(response => {this.eventos = response
    console.log(response)},
      
      error =>{
        console.log(Error);
      }); 
  }

}
