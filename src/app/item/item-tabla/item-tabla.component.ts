import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-tabla',
  templateUrl: './item-tabla.component.html',
  styleUrls: ['./item-tabla.component.scss']
})
export class ItemTablaComponent implements OnInit {


  items: Item[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemService.getAllItems().subscribe(items=> this.items = items)

    // Me engancho al observable readItem del itemService, y cada vez que se observable haga un next, voy a recibir los datos, y se va a ejecutar el alert.
    // La forma de que este observable genere un dato, es primero activando el metodo read(id) de abajo, entonces va a ir a buscar ese item, y en el iTemservice va a realizar un next(), y el dato va a venir a este componente
    this.itemService.getReadItem().subscribe(item => alert(item.id + ' ' + item.name + ' ' + item.description))
  }

  delete(id:number){
    this.itemService.delete(id)
  }

  read(id:number){
   this.itemService.read(id)
  }

  update(item:Item){
    this.itemService.update(item)
  }
}
