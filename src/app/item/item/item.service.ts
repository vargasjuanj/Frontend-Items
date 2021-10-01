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
      error => alert(error)
    )
  }

  getReadItem(): Observable<Item> {

    return this.readItem.asObservable()
  }

  read(id: number){
    this.httpService.get(ItemService.URI + '/' + id).subscribe(
      (itemValue: Item) => this.readItem.next(itemValue),
      error => alert(error)
    )
  }

  private readAll(){
    this.httpService.get(ItemService.URI).subscribe(
      (itemArray: Item[]) => this.allItems.next(itemArray),
      error => alert(error)
    )
  }

  delete(id: number){
    this.httpService.delete(ItemService.URI + '/' + id).subscribe(
      () => this.readAll(),
      error => alert(error)
    )
  }

  create(item: Item){
    this.httpService.post(ItemService.URI, item).subscribe(
      () => this.readAll(),
      error => alert(error)
    )
  }


  update(item: Item){
    this.httpService.put(ItemService.URI + '/' + item.id, item).subscribe(
      () => this.readAll(),
      error => alert(error)
    )
  }
}

