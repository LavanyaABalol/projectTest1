import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
adduser:any
formValue:any;
  result: any;
  constructor(private myservice:PostService,private route:Router) { 
this.adduser=new FormGroup(
  {
    CustomerFName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    CustomerLName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
   Country:new FormControl('',[Validators.required,Validators.maxLength(30)]),
 
 }
);

  }

  ngOnInit(): void {
  }
  onsubmit(){
    this.formValue=this.adduser.value;
    this.myservice.addcustomerService(this.formValue).subscribe((r:any)=>{this.result=r;});
    
    this.route.navigate(['/dashboard']);

  }
  get CustomerFName()
  {
    return this.adduser.get('CustomerFName');
  }
  get CustomerLName()
  {
    return this.adduser.get('CustomerLName');
  }

  get Country()
  {
    return this.adduser.get('Country');
  }

  get CreatedDate()
  {
    return this.adduser.get('CreatedDate');
  }
  backV()
  {
    this.route.navigate(['/dashboard']);
  }
}
