import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Pages
import {HomeComponent} from "./home/home.component"
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
        { path: "", component:HomeComponent,children:[
        {path: "",redirectTo: "register", pathMatch: "full"},
        {path: "register", component: RegisterComponent},
        { path: "list", component: ListComponent }
      ]}
];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
