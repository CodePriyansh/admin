import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient,HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { OrderComponent } from './order/order.component';
import { AdminService } from './admin.service';
import { TokenService } from './token.service';
import { SigninComponent } from './signin/signin.component';
import { ProductpageComponent } from './productpage/productpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdmincustomerComponent,
    ViewcategoryComponent,
    ViewproductComponent,
    OrderComponent,
    SigninComponent,
    ProductpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AdminService,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
