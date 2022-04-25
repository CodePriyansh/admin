import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild("myDiv")
  myDiv:ElementRef | undefined;
  catImage='';
  catName='';
  category='';
  prodName='';
  prodImage='';
  prodDescription='';
  prodPrice='';
  flavour='';
  categoryList:any;
  cid:any;

  constructor(private api:AdminService, private _router:Router) { }

  public isLoggedIn(){
    return this.api.checkToken();
  }
  public show(wrapper:any){
    wrapper.classList.toggle("toggled");
}
  ngOnInit(): void {
    this.api.getCategoryList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.categoryList=data;
        console.log(data)
      }
    });
  }

  public signout(){
    localStorage.removeItem('jwt-token');
    this._router.navigate(['signin']);
  }


  selectCatImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.catImage = file;
    }
  }
  selectProdImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.prodImage = file;
    }
  }

  addCategory(){
    const formData = new FormData();
    formData.append("catImage",this.catImage);
    formData.append("catName",this.catName);
    this.api.addcategory(formData).subscribe(data=>{
      // console.log(data);
      if(data){
        this.ngOnInit();
        alert('category added.....')
          }else{
            alert('not added')

          }

    })
  }

  get(id:any){
      console.log(id.value)
  }
  addProduct(){


    alert(this.myDiv?.nativeElement.value)
    const formData = new FormData();
    formData.append("category",this.myDiv?.nativeElement.value)
    formData.append("prodImage",this.prodImage);
    formData.append("prodName",this.prodName);
    formData.append("prodPrice",this.prodPrice);
    formData.append("flavour",this.flavour);
    formData.append("prodDescription",this.prodDescription);

    this.api.addProduct(formData).subscribe(data=>{
    console.log(data);
      if(data){
        this.ngOnInit();
        alert('product added.....')
          }else{
            alert('not added')

          }

    })

  }


}
