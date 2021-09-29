import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

today = new Date()
toggle = true //start with true == shortDate
nombre = 'juan'
//metodo get público, que se utiliza como si fuera un atributo, los demás por defecto son publicos tmb
get format () {
  return this.toggle? 'shortDate' : 'fullDate'
}


//Cada vez que cambie el interruptor el formato de la fecha va a cambiar
toggleFormat(){
  this.toggle= !this.toggle
}

}
