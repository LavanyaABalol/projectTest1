import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
Id:any;
  result: readData | undefined;
  adduser: any;
  result1: readData|undefined;
  newresponse: any;
  data:any;
 
  constructor(private myservice:PostService,private router:Router,private ar:ActivatedRoute) {
    this.adduser=new FormGroup(
      {
        CustomerFName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        CustomerLName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
       Country:new FormControl('',[Validators.required,Validators.maxLength(30)]),
     
     });
   
   

   }

  ngOnInit(): void {

    this.Id=this.ar.snapshot.params['id'];
    this.myservice.updateCustomerGetData(this.Id).subscribe((r:any)=>{this.result=r;this.result1=this.result;
    
      this.adduser.controls['CustomerFName'].setValue("xyz");
      this.adduser.controls['CustomerLName'].setValue(this.result1?.customerLName);
      this.adduser.controls['Country'].setValue(this.result1?.country);
    })}
   

 
   


  

  onsubmit()
  {
    this.data=this.adduser.value;
   this.data.CustomerId=this.Id;
    this.myservice.updateCustomerService(this.data).subscribe((r:any)=>{this.newresponse;});
    this.router.navigate(['/dashboard']);
  }
  backV()
  {
    this.router.navigate(['/dashboard']);
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

}
interface readData
{
  customerFName:string;
  customerLName:string;
  country:string;

}
