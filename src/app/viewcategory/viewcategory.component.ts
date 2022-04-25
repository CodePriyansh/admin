import { Component,Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  catImage="";
  catName="";
  cid="";


  oldImage:any;
  categoryList:any=[];
  categoryService:AdminService;


  constructor(private injector:Injector , private api:AdminService , private route:ActivatedRoute) {
  this.categoryService = this.injector.get(AdminService);


  }


  ngOnInit(): void {
  this.categoryService.getCategoryList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.categoryList=data;
        console.log(data);
      }
    });
  }

  public deleteCategory(cid:string){
    if(confirm('are you sure')){
    this.categoryService.removeCategory(cid).subscribe(data=>{


      console.log(data)
     if(data){
      this.ngOnInit();
      alert('category deleted.....')
        }else{
          alert('category not deleted')

        }

    }

    )
  }



}


edit(){
  alert(this.catId)
  const formData = new FormData();
  formData.append("categoryid",this.catId);
  formData.append("catName",this.catName);
  formData.append("newImage",this.catImage);
  formData.append("oldImage",this.catImage);


this.api.updateCat(formData).subscribe(data=>{
  console.log(data);
 if(data){
   alert(' updated.....')
   this.ngOnInit();

     }else{
       alert('not updated')

     }
})
}
catId:any;
updateCategory(data:any){
  this.catName=data.catName;
  this.oldImage=data.catImage;
  this.catId=data._id;

}
selectImage(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.catImage = file;
  }
}
}




