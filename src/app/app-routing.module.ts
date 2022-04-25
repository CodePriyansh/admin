import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './signin/signin.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {path:"signin",component:SigninComponent},
  {path:"",component:DashboardComponent,canActivate:[(AuthGuard)]},
  {path:"viewCategory",component:ViewcategoryComponent,canActivate:[(AuthGuard)]},
  {path:"adminCustomer",component:AdmincustomerComponent,canActivate:[(AuthGuard)]},
  {path:"viewProduct",component:ViewproductComponent,canActivate:[(AuthGuard)]},
  {path:"Product/:cid",component:ProductpageComponent},
  {path:"order",component:OrderComponent,canActivate:[(AuthGuard)]},
  {path:"page",component:ProductpageComponent,canActivate:[(AuthGuard)]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
