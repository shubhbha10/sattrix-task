import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
userDetails: any [] = [];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    let userData = JSON.parse(sessionStorage.getItem('userData'));
    this.userDetails.push(userData)
  }

  onUpdate(){
    this.router.navigate(["/dashboard/register"], {queryParams: {update: true}});
  }

  onDelete(index){
    this.userDetails.splice(index, 1);
  }
}
