import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : any; 
   
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos(); 
  }

  getEventos(){
    this.eventos = this.http.get("http://localhost:5000/WeatherForecast/1").
    subscribe(response => {this.eventos = response
    console.log(response)},
      
      error =>{
        console.log(Error);
      }); 

      /*
      this.eventos = this.http.get("http://localhost:5000/WeatherForecast/2")
      .subscribe((data) => this.eventos = {
        tema: data['tema'],
        local:  data['local']
    });*/ 
  }

}
