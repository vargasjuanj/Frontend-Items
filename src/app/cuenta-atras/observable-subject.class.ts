import { Observable, Subject, Subscription, timer } from "rxjs";


// EN DEFINITIVA UN OBSERVABLE QUE LOS DEMAS PUEDEN OBSERVAR Y ESE DATO VA A CAMBIAR, 
// YO CON ESTO PUEDO HACER ALGO QUE LOS DEMÁS PUEDEN OBSERVAR (UNO O VARIOS)
// En esta clase se es observador y observable a la vez. Observador es el atributo subject y es observadora la clase del timer
// Es decir esta clase es observadora del timer, y a su vez es observable por otros
// Una vez que se completa el observable ya no se puede reutilizar, hay que crear otra instancia
export class ObservableSubject {
    private subject: Subject<String> = new Subject();
    constructor() {
        //Cuenta atras 5 4 3 2 1 

        //Con un retraso de un 1 seg, que mande señales cada segundo
        const timerVariable = timer(1000, 1000);
        // Cuando yo me subscribo el timer me va a empzar a dar un 0, despues un 1 y asi
        const subscription: Subscription = timerVariable.subscribe(t => {
            if (t > 4) {
                subscription.unsubscribe()
                this.subject.complete()

            } else {
                //Esto hace que la cuenta sea para atras 5 4 3 2

                //Uso el valor t que me devuelve timer al estar subscripto y a la vez envio un valor con subject obteniendo otro resultado. El timer solo es parte del proceso
                this.subject.next(String(5 - t))
            }
        })

    }

    //Lo devuelve como un observable de tipo String, esto me lo da la herencia porque Subject hereda de Observable
    getObservable(): Observable<String> {
        return this.subject.asObservable()
    }
}