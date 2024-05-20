import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css']
})
export class Sidebar1Component implements OnInit {

  constructor(private  auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
   }

}
