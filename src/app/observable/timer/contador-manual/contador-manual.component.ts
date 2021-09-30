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

  constructor() { }

  ngOnInit(): void {
  }

  //Con counterObservable y sus metodos he habilitado la posibilidad de que me puedan observar, pero el contador sigue funcionando igual normalmente, no altera el comportamiento en si
  increase() {
    this.counter++
    if (this.counter > 9) {
      this.counterObservable.complete()
    } else {
      // Añado esto para que los observadores se den cuenta de los cambios de counter
      this.counterObservable.next(this.counter)
    }

  }
}
