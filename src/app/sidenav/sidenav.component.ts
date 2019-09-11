import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  title = "List of Products";
  products: String[];

  constructor(service: ProductsService) {
      this.products = service.getProjects();
   }

  ngOnInit() {
  }
}