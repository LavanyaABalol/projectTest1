import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url="https://localhost:7196/api/api";

  constructor(private httpc:HttpClient) {
    
   }
   getCustomerList()
   {
     return this.httpc.get(this.url);
   }
   deletecustomerService(id:number)
   {
    return this.httpc.delete(this.url+"/"+id);
   }
   viewcustomerServicebyId(id:number)
   {
    return this.httpc.get(this.url+"/"+id);
   }
   addcustomerService(addData:any)
   {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };

    return this.httpc.post(this.url,addData,{headers});
   }

   updateCustomerGetData(id:number)
   {
     return this.httpc.get(this.url+"/"+id);
   }

   updateCustomerService(c:any)
   {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpc.put(this.url,c,{headers});
   }
}
