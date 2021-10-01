import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/core/http.service';
import { Item } from './item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  static URI = '/items'

  private readItem: Subject<Item> = new Subject()

  private updateItem: Subject<Item> = new Subject()

  private allItems: Subject<Item[]> = new Subject()


  constructor(private httpService: HttpService) { }

// Cuando retornamos esta propieda como un observable se estaria ya formando un vinculo con el componente, sin que sea neceraio volver a retornar, porque una vez que se retorna en el componente este se subscribe a esa propiedad y queda conectado, observandola y obteniendo los datos que esta envia a traves de next
  getAllItems(): Observable<Item[]> {
     this.readAll()
    return this.allItems.asObservable()
  }

  getUpdateItem(): Observable<Item> {

    return this.updateItem.asObservable()
  }

  prepareUpdate(id: number){
    this.httpService.get(ItemService.URI + '/' + id).subscribe(
      (itemValue: Item) => this.updateItem.next(itemValue),
      error => alert('prepareUpdate '+error)
    )
  }

  getReadItem(): Observable<Item> {

    return this.readItem.asObservable()
  }

  read(id: number){
    this.httpService.get(ItemService.URI + '/' + id).subscribe(
      (itemValue: Item) => this.readItem.next(itemValue),
      error => alert('read '+error)
    )
  }

  private readAll(){
    this.httpService.get(ItemService.URI).subscribe(
      (itemArray: Item[]) => this.allItems.next(itemArray),
      error => alert('readAll '+error)
    )
  }

  delete(id: number){
    this.httpService.delete(ItemService.URI + '/' + id).subscribe(
      () => this.readAll(),
      error => alert('delete '+error)
    )
  }

  create(item: Item){
    this.httpService.post(ItemService.URI, item).subscribe(
      () => this.readAll(),
      error => alert('create '+error)
    )
  }


  update(item: Item){
    this.httpService.put(ItemService.URI + '/' + item.id, item).subscribe(
      () => this.readAll(),
      error => alert('update '+error)
    )
  }
}

