import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dateTime = new Date();
  constructor() { }

  ngOnInit(): void {
    this.Time()
  }
  Time(){
    interval(1).subscribe(data=>{
      this.dateTime = new Date();
    })
     }
}
