import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';

@NgModule({
  // HTML
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // All services live under providers.
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
