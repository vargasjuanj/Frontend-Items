import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  today = new Date()
  toggle = true //start with true == shortDate
  nombre = 'juan'
  //metodo get público, que se utiliza como si fuera un atributo, los demás por defecto son publicos tmb
  get format () {
    return this.toggle? 'shortDate' : 'fullDate'
  }
  
  
 
  
  constructor() { }

  ngOnInit(): void {
  }
 //Cada vez que cambie el interruptor el formato de la fecha va a cambiar
 toggleFormat(){
  this.toggle= !this.toggle
}
}
