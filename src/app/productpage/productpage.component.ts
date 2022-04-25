import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  id:any;
 data:any;
 num:any;
 prodOld='';
 prodImage='';
 prodName='';
 prodPrice='';
 prodDescription='';
 flavour='';

  constructor(private api:AdminService , private route:ActivatedRoute,private router:Router) {
   this.route.params.subscribe((params:Params)=>{
     this.id = params['id']
     console.log(this.id)
   })
   this.api.getProductId(this.id).subscribe(data=>{
     this.data=data;
    console.log(this.data)
   })
  }

  ngOnInit(): void {

  }
  public deleteProduct(pid:string){
    if(confirm('are you sure')){
    this.api.removeProduct(pid).subscribe(data=>{


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
