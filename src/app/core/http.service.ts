import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  static URI = 'http://localhost:8080/api/v1/'

  private params = new HttpParams()

  private headers = new HttpHeaders()



  constructor(private http: HttpClient) {

  }

  // Patron builder, devuelve la misma instancia pero con los atributos modificados
  // Como me devuelve a mi mismo puedo decir param(k,v).param(k,v) y asi ...
  param(key: string, value: string): HttpService {
    this.params.append(key, value)
    return this
  }

  // Meter parametro en cabecera
  header(key: string, value: string): HttpService {
    this.headers.append(key, value)
    return this
  }

  // Utilizas http, el get, pongo URI basica y crea las opciones de la llmada (parametros, cabeceras acumulados), ademas me filtras la llamada y me estraes los datos de la respuesta, y ademas si hay errores me los manejas
  // El error lo proceso yo, pero puedo decidir si traspaso el error o no lo transpaso, para q lo vea el usaurio o no
  
  
  // get(endpoint: string): Observable<any> {


  //   return this.http.get(HttpService.URI + endpoint, { headers: this.headers, params: this.params }).pipe(
  //     // El pipe() es para concatenar  operadores rxjs y el map aca esta transformando la respuesta antes de devolversela a un observador (subscribe) y devuelve un nuevo observable, modifica el flujo
  //     map(
  //       response => this.extractData(response).catch(this.handleError)
  //     )
  //   )
  // }

  get(endpoint: string): Observable<any> {


    return this.http.get(HttpService.URI + endpoint, { headers: this.headers, params: this.params }).pipe(
      // El pipe() es para concatenar  operadores rxjs y el map aca esta transformando la respuesta antes de devolversela a un observador (subscribe) y devuelve un nuevo observable, modifica el flujo
      map(
        response => response
      )
    )
  }

  post(endpoint: string , body?: any): Observable<any> {


    return this.http.post(HttpService.URI + endpoint, body, { headers: this.headers, params: this.params }).pipe(
      map(
        response => response
      )
    )
  }

  delete(endpoint: string): Observable<any> {


    return this.http.delete(HttpService.URI + endpoint, { headers: this.headers, params: this.params }).pipe(
      map(
        response => response
      )
    )
  }
 

  put(endpoint: string, body?: any): Observable<any> {


    return this.http.put(HttpService.URI + endpoint, body, { headers: this.headers, params: this.params }).pipe(
      map(
        response => response
      )
    )
  }
  patch(endpoint: string, body?: any): Observable<any> {


    return this.http.patch(HttpService.URI + endpoint, body, { headers: this.headers, params: this.params }).pipe(
      map(
        response => response
      )
    )
  }


  //Hace largar error
  // private extractData(res: Response | any): any {

  //   // Recupero la cabecera y miro si el contenido de la cabecera que me devuelve es de tipo json. Es decir, no voy a hacer una extraccion de json, si lo que me llega no es de tipo json
  //   if (res.headers.get('content-type')?.indexOf('application/json') !== -1) {
  //     // Si llega json, lo extraigo como json
  //     return res.json() // Para filtrar: map((item: Item) => item.???)
  //   }

  //   // Si no llega json lo extraigo como texto
  //   return res.text()

  // }



  // Error entendible por el cliente, pero se modifica de acuerdo al tipo de cliente, si es final o con conocimientos avanzados (ha habido problemas con el servidor intentalo mas tarde, es id es invalido,) mas cercano al usuario que a http el error
  // Se van metiendo capas para simplificar
  // private handleError(error: Response | any): any {
  //   try {

  //     return Observable.throw('ERROR: exception '
  //       + error.json().exception + ', message: '
  //       + error.json().message + ', path: '
  //       + error.json().path)

  //   } catch (e) {

  //     return Observable.throw(error)
  //   }
  // }
}








