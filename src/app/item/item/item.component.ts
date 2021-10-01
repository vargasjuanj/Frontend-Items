import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: Item[] = []
  updateCheked = false
  updateItem: Item = {id: 0, name: '', description: ''}
  creationItem: Item = {id: 0, name: '', description: ''}



  constructor(private httpService: HttpService, private itemService: ItemService) { }

  ngOnInit(): void {
    // this.items = []
    // this.updateItem = {id: 0, name: '', description: ''}
    // this.creationItem = {id: 0, name: '', description: ''}
    this.itemService.getAllItems().subscribe(items => this.items = items)
    this.itemService.getUpdateItem().subscribe(item =>{
       this.updateItem = item
    this.updateCheked = true  
    }
      )

      this.itemService.getReadItem().subscribe(item => alert(item.id +' ' + item.name +' ' + item.description))

  }

  read(id:number){
    this.itemService.read(id)
  }

  
  delete(id:number){
    this.itemService.delete(id)
  }

  prepareUpdate(id: number){
    this.itemService.prepareUpdate(id)
  }

  save(){
    this.updateCheked = false
    this.itemService.update(this.updateItem)
  }

  
  create(){
    this.itemService.create(this.creationItem)
  }

  
  cancel(){
    this.updateCheked = false
  }

}
