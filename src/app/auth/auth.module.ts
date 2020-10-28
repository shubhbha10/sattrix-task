import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


// Routing Module Import 
import {AuthRoutingModule} from "./auth-routing.module";
// Component Import
import {LoginComponent} from "./login/login.component";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
