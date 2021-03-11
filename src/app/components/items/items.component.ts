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
        title: 'panales gold',
        price: 42000,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'leche',
        price: 91000,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        title: 'nestum',
        price: 12500,
        quantity: 3,
        completed: false
      }
   ];

   
  }
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);

}
}
