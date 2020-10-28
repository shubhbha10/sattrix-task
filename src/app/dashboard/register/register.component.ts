import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  firstName = "";
  lastName: "";
  mobile = "";
  email = "";
  password = "";
  confirmPassword = "";
  update: any;
  constructor(public router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(param => {
     this.update = param.update
       let userData = JSON.parse(sessionStorage.getItem('userData'))
       this.firstName = userData?.firstName;
       this.lastName = userData?.lastName;
       this.mobile = userData?.mobile;
       this.email = userData?.email;
       this.password = userData?.password;
   })

  }

  

  onRegister() {
    let userData = {
      firstName: this.firstName,
      lastName: this.lastName ,
      mobile: this.mobile,
      email: this.email,
      password: this.password,
    };
    
    if(this.password === this.confirmPassword){
      sessionStorage.setItem('userData', JSON.stringify(userData));
      this.router.navigate(["/auth"], {queryParams: {isRegistered: true}})
    }else {
      alert("Password and Confirm Password should be same")
    }
  }

  onUpdate(){
    let userData = {
      firstName: this.firstName,
      lastName: this.lastName ,
      mobile: this.mobile,
      email: this.email,
      password: this.password,
    };
    
    if(this.password === this.confirmPassword){
      sessionStorage.setItem('userData', JSON.stringify(userData));
      alert("Data Updated Successfully");
    }else {
      alert("Password and Confirm Password should be same")
    }
  }
}
