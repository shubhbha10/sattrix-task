import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
// Routing Module Import 
import {DashboardRoutingModule} from "./dashboard-routing..module";
// Component Import
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [RegisterComponent, ListComponent, HomeComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
