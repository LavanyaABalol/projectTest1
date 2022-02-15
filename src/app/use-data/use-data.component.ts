import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-use-data',
  templateUrl: './use-data.component.html',
  styleUrls: ['./use-data.component.css']
})
export class UseDataComponent implements OnInit {
  result: any;
  Id:any;
  

  constructor(private myservice:PostService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  this.Id=this.ar.snapshot.params['id'];
    this.myservice.viewcustomerServicebyId(this.Id).subscribe(r=>{this.result=r;});
  }

  backtoView()
  {
    this.router.navigate(['/dashboard']);
  }

}
