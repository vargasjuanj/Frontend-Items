import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contador-manual',
  templateUrl: './contador-manual.component.html',
  styleUrls: ['./contador-manual.component.scss']
})
export class ContadorManualComponent implements OnInit {

  counter = 0 // A esto lo convierto en observable


  //Permito que este contador pueda ser observado conviertiendolo en un observable
  // el tipo que voy a boservar es un number
  //Cuando la variable counter se ve alterada, yo le aviso a los observadores a traves del objeto counterObservable
  counterObservable: Subject<number> = new Subject()


  observer!: number // Este va a representar los datos del observador, los datos q ve cierto observador

  observer2!: number
  constructor() { }


  // Con counterObservable y sus metodos he habilitado la posibilidad de que me puedan observar, pero el contador sigue funcionando igual normalmente, no altera el comportamiento en si
  increase() {
    this.counter++
    if (this.counter > 9) {
      this.counterObservable.complete()
    } else {
      // Añado esto para que los observadores se den cuenta de los cambios de counter
      this.counterObservable.next(this.counter)
    }

  }


  //COMO TERCER PASO REGISTRAMOS LOS OBSERVADORES,VAMOS APROVECHAR ESTE METODO  QUE SE EJECUTA AL PRINCIPIO
// ESTO DESPUES SE DEBERIA AMOLDAR A CLASES INDEPENDIENTES, USAR EN OTRAS CLASES COMO INYECCION DE DEPENDENCIAS, COMO EN EL COMPONENTE CUENTA ATRAS QUE INYECTA LA CLASE observable-subject.class.ts
  ngOnInit(): void {
    // Para que yo sea observador primero lo que debo hacer es verlo como un observable, eso lo consiguo con el metodo asObservable() que me permite verlo como un observable generico, no estoy atado al tipo del sujeto a tratar, es generico
    // Con value establesco la variable que va a recoger el dato que nos manda el observable (this.counter)
    this.counterObservable.asObservable().subscribe(value => this.observer = value, error=>alert('Error! observer 1'), ()=>alert('completo observer 1'))
    // A este lo voy a subscribir sin tipo generico
    this.counterObservable.subscribe(value => this.observer2 = value)

  }

}
