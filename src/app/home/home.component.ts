import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdata : any[];


  constructor(private httpservice: UsersService, private a: ActivatedRoute) { }

  ngOnInit(): void {
  
   this.httpservice.getData().then((e:any)=>{this.userdata=e.data});
   // console.log(this.userdata);
   
}

Display_Name = "";
searchText = '';
selectedEmp: any;
number: any;
dataSource: any[];


setRow(i){
  this.number= i;
  this.userdata[this.number]
  this.selectedEmp=this.userdata[this.number]
  this.dataSource=[this.selectedEmp]
}

// model :any ={};
//   addEmployee(){
//     this.userdata.push(this.model);
//     this.model={};
//   }
// 
 model2 : any ={};
  myvalue;
  editEmployee(i){
    this.model2.name = this.userdata[i].E_mail_Address;
    this.model2.position = this.userdata[i].First_Name;
    this.model2.position = this.userdata[i].Display_Name;
    this.model2.position = this.userdata[i].Home_Phone;
    this.model2.position = this.userdata[i].Last_Name;
    this.myvalue=i;
  }
  
//   updateEmployee(){
//    let k=this.myvalue;
//    for(let i=0;i<this.userdata.length;i++)
//    {
//      if(i==k)
//      {
//        this.userdata[i]= this.model2;
//        this.model={};
//      }
//    }
//  }
deleteEmployee(i){
      this.userdata.splice(i,1);
      alert ("Deleting User");
     }


}

  


