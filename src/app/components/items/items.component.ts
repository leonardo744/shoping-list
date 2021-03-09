import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'pan',
        price: 8,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        title: 'empanada',
        price: 1500,
        quantity: 6,
        completed: false
      }
   ];

   
  }
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id === item.id);

}
}
