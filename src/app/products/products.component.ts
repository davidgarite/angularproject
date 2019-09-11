import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Title: String = 'Products Area';
  products = [
    { title: 'John\'s Shirt', image: 'images/j-shirt.jpg', cost: 9.99 },
    { title: 'John\'s Shirt', image: 'images/j-shirt.jpg', cost: 9.99 },
    { title: 'John\'s Shirt', image: 'images/j-shirt.jpg', cost: 9.99 },
    { title: 'John\'s Shirt', image: 'images/j-shirt.jpg', cost: 9.99 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
