import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription, timer } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContadorObservableService {
    
    counter: number = 0
    private counterObservable: Subject<number> = new Subject();

    
    constructor() {
      while(true){
        this.counter++
        if (this.counter > 9) {
          this.counterObservable.complete()
          break
        } else {
          this.counterObservable.next(this.counter)
        }
      }
       

    }

    getObservable(): Observable<number> {
        return this.counterObservable.asObservable() 
    }
}