import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

static URI = 'http://localhost:8080/api/v0'

private params = new URLSearchParams()

private headers= new  Headers()



  constructor(private http: Http) { }
}
