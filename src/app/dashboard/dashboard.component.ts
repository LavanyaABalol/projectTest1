import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //Variable declaration
  adduser: any; //FormGroup
  updateuser: FormGroup;
  formValue: any;
  data: any;
  newresponse: any;
  result1: any;
  Id: any;
  result13: any;
  result14: any;
  result: any;
  result12: any;
  closeResult: string | undefined ;


  constructor(private myservice:PostService,private router:Router,private modalService: NgbModal)
  {
    //Reactive form for Adding Customer
    this.adduser=new FormGroup(
      {
        CustomerFName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        CustomerLName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        Country:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      });

    //Reactive form for Adding Customer
    this.updateuser=new FormGroup(
      {
        CustomerFName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        CustomerLName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        Country:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      });
   }

 //ngOnInit():Initializing components/directives on load  
  ngOnInit(): void 
    {
      this.myservice.getCustomerList().subscribe(r=>{this.result=r});
    }

 
  deleteCustomer(id:number)
    {
      if(window.confirm("Are you Sure, want to Delete?"))
      {
        this.myservice.deletecustomerService(id).subscribe(r=>{this.result=r;});
        window.location.reload();
        this.router.navigate(['/dashboard']);
      }

      else
         this.router.navigate(['/dashboard']);
    
    }

  AdduserC(content1:any)
    {
      this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
      });
    }

  private getDismissReason1(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    else {
      return `with: ${reason}`;
    }
  }

  
  //Add user procedure
  open(content: any,CustomerId:number) {
    this.myservice.viewcustomerServicebyId(CustomerId).subscribe(r=>{this.result12=r;});

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onsubmit(content1:any){
    this.formValue=this.adduser.value;
    this.myservice.addcustomerService(this.formValue).subscribe((r:any)=>{this.result=r;});

   
    window.location.reload();

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
 
  //Update User Function
  onsubmitupdate()
  {
    this.data=this.updateuser.value;
   this.data.CustomerId=this.Id;
    this.myservice.updateCustomerService(this.data).subscribe((r:any)=>{this.newresponse=r;});
   // this.router.navigate(['/dashboard']);
    window.location.reload();
  }

  updateCustomer(content1:any,CustomerId:number)
  {
    this.Id=CustomerId;
    this.myservice.updateCustomerGetData(CustomerId)
    .subscribe((r:any)=>{this.result13=r;this.result14=this.result13;
      this.updateuser.controls['CustomerFName'].setValue(this.result14?.customerFName);
      this.updateuser.controls['CustomerLName'].setValue(this.result14?.customerLName);
      this.updateuser.controls['Country'].setValue(this.result14?.country);
    })

    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
