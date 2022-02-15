import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { UseDataComponent } from './use-data/use-data.component';

const routes: Routes = [{path:'dashboard',component:DashboardComponent},
{path:'',component:DashboardComponent},
{path:'userdata/:id',component:UseDataComponent},
{path:'adduserpage',component:AdduserComponent},
{path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
