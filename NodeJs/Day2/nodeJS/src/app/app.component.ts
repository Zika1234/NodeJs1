import { Component } from '@angular/core';
import {ConsumerService} from './consumer.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodeJS';

  constructor(private consumer:ConsumerService){}
data:any;
name:string;
age:number;
findname:string;
nameUp:string;
ageUp:number;
data1:any;
data2:any;
nameDel:string;
ageDel:number;
namefind:string;
data3:any;
  getButton():void{
    console.log("Button created");
    this.consumer.readData().subscribe((data=>{this.data1=data}))
  
  // console.log(this.data);
}

postButton(){
  this.consumer.postData(this.name,this.age).subscribe();
  this.consumer.getData().subscribe((data=>{this.data2=data}));
}

deleteButton(){
  this.consumer.deleteData(this.nameDel,this.ageDel).subscribe();
   this.consumer.getData().subscribe((data=>{this.data2=data}));
}

updateButton(){
  this.consumer.updateData(this.nameUp,this.ageUp,this.findname).subscribe();
}

findButton(){
  this.consumer.FindData(this.namefind).subscribe((data=>{this.data1=data}));
  // console.log(this.data1);
  //   console.log(this.data3)
}

findAll():void{
  console.log("Find all clicked");
  this.consumer.getData().subscribe((data=>{this.data2=data}))
  // console.log(this.data2);
}


