import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList:any=[];
  count="";
  constructor(private api:AdminService) { }
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




}
