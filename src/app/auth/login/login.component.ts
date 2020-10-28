import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  submitted = false;
  registeredUser: any;
  constructor(
    public router: Router,private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.registeredUser = param.isRegistered;
    })
  }

  onLogin(){
    console.log(this.username);
    console.log(this.password);
    
    
    if(this.registeredUser){
      let userData = JSON.parse(sessionStorage.getItem('userData'));
      console.log(userData);
      if(this.username === userData.email && this.password === userData.password){
        this.router.navigate(["/dashboard/register"], {queryParams: {loggedIn: true}});
      }else {
        alert("Invalid Credentials")
      }
    }else {
      alert("Please register yourself")
    }
  }

  onRegister(){
    this.router.navigate(["/dashboard"]);
  }

}
