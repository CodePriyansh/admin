import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

// import { HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  //  signupAPI = "https://cakelicious-2.herokuapp.com/";
  signinAPI = "https://cakelicious-2.herokuapp.com/admin/signin";
  deleteAPI ="https://cakelicious-2.herokuapp.com/admin/deleteCategory";
  deleteproduct ="https://cakelicious-2.herokuapp.com/admin/deleteProduct";
  constructor(private _http:HttpClient) { }
  // public signupuser(name:string,email:string,password:string,number:string){
  //  return this._http.post<any>(this.signupAPI,{customerName:name,customerEmail:email,customerPassword:password,customerNumber:number})
  // }
  public removeProduct(id:string):Observable<any>{
    return this._http.post<any>(this.deleteproduct,{id:id})
  }
  public removeCategory(id:string):Observable<any>{
    return this._http.post<any>(this.deleteAPI,{id:id})
  }
  public signinuser(email:string,password:string){
    console.log(email + " " + password);
    return this._http.post<any>(this.signinAPI,{email:email,password:password})
   }
   public checkToken():boolean{
     return !!localStorage.getItem('jwt-token');
   }

   addcategory(formData:FormData){

    var product = "https://cakelicious-2.herokuapp.com/admin/addCategory";
    return this._http.post(product,formData);
  }
  updateCat(formData:FormData){
    var update = "https://cakelicious-2.herokuapp.com/admin/updateCategory";
    return this._http.post(update,formData);
  }
  editProduct(formData:FormData){
    var update = "https://cakelicious-2.herokuapp.com/admin/updateProduct";
    return this._http.post(update,formData);
  }
  getCategoryList():Observable<any>{
    var api = "https://cakelicious-2.herokuapp.com/admin/ViewCategory";
    return this._http.get(api);
  }

  addProduct(formData:FormData){
    // var api = "https://cakelicious-2.herokuapp.com/admin/addProduct";
    var api = "https://cakelicious-2.herokuapp.com/admin/addProduct";
    return this._http.post(api,formData);
  }

  getProductList():Observable<any>{
    var api = "https://cakelicious-2.herokuapp.com/admin/ViewProduct";
    return this._http.get(api);
  }
  getProductId(id: any):Observable<any>{
    var api = "https://cakelicious-2.herokuapp.com/admin/ViewProductByCAtegory/"+id;
    return this._http.get(api);
  }

  }
