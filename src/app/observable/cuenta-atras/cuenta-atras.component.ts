import { Component } from '@angular/core';

import { ObservableSubject } from "./observable-subject.class"


@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
    styleUrls: ['./cuenta-atras.component.scss']
})
export class CuentaAtrasComponent{

value : String = ''

value2 : String = ''

// A un objeto observable se pueden subscribir muchos observadores. Cuando se completa, se le avisa a todos los observadores
private observableSubject: ObservableSubject = new ObservableSubject()
//Cuando te subscribes pones el spinner en marcha y cuando llega el dato ocultas el spinner
ngOnInit(): void {
    //observador 1
    this.observableSubject.getObservable().subscribe(
        data => this.value = data, //llega un nuevo dato, se inyecta
        error => alert('Observer1, error code: ' + error), //se ha producido un error
        ()=> alert('Observer1: finished') // seha completado
    )

    //observador 2
this.observableSubject.getObservable().subscribe(
    data => this.value2 = data,
    error => alert('Observer2, error code: '+ error)
)


}



}