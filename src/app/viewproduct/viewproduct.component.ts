import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  data:any;
  num:any;
  productList:any=[];
  _id='';
  prodOld='';
  prodImage='';
  prodName='';
  prodPrice='';
  prodDescription='';
  flavour='';

 filterMetaData={count  : 0};
  constructor(private api:AdminService,private update:UpdateDataService,private _route:Router) { }

  ngOnInit(): void {

    this.api.getProductList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.productList=data;
      }
    });
  }
  public category(){
   this._route.navigate(['page']);
  }
  public deleteProduct(pid:string){
    if(confirm('are you sure')){
    this.api.removeProduct(pid).subscribe(data=>{
    data=data;

      console.log(data)
     if(data){
      this.ngOnInit();
      alert(' deleted.....')
        }else{
          alert(' not deleted')

        }

    }

    )
  }
}

edit(){
  alert(this.PRODUCT)
  const formData = new FormData();
  formData.append("productid",this.PRODUCT);
  formData.append("prodName",this.prodName);
  formData.append("prodPrice",this.prodPrice);
  formData.append("prodDescription",this.prodDescription);
  formData.append("flavour",this.flavour);
  formData.append("prodImage",this.prodImage);
  formData.append("oldImage",this.prodOld)


this.api.editProduct(formData).subscribe(data=>{
  console.log(data);
 if(data){
   alert('product updated.....')
   this.ngOnInit();

     }else{
       alert('product not updated')

     }
})
}
PRODUCT:any;
updateProduct(data:any){
  this.prodName=data.prodName;
  this.prodPrice=data.prodPrice;
  this.prodDescription=data.prodDescription;
  this.flavour=data.flavour;
  this.prodOld=data.prodImage;
  this.PRODUCT=data._id;

}
selectImage(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.prodImage = file;
  }
}


}
