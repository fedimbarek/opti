import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { ApiPlanningService } from '../services/api-planning.service';

@Component({
  selector: 'app-planning1',
  templateUrl: './planning1.component.html',
  styleUrls: ['./planning1.component.css']
})
export class Planning1Component implements OnInit {
  searchText:any;
  user:any;
  Agent:any;
  Destination:any
  selectedAgent: any;
  constructor(private api:ApiAgentService,private planning:ApiPlanningService) { }

  ngOnInit(): void {
    this.getplanning();
    this.getAgent();
    this.getdestination()
  }
  showDetail(agent: any): void {
    this.selectedAgent = agent;
  }
  formatDate(dateString: string): string {
    // Extract date parts from the date string
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // January is 0, so we add 1 to get the correct mo
    const day = date.getDate();

    // Construct the formatted date string
    return `${year}-${this.padZero(month)}-${this.padZero(day)}`;
}
private padZero(value: number): string {
  // Add leading zero if value is less than 10
  return value < 10 ? `0${value}` : `${value}`;
}
getplanning(){
  this.api.getPlanning().subscribe((data:any)=>{
    console.log("data",data)
    this.user=data.planningList;
  })
  
}
getAgent(){
  this.api.getagent().subscribe((data:any)=>{
    console.log("dataAgent",data)
    this.Agent=data.contactList;
  })

}
getdestination(){
  this.api.getDestination().subscribe((data:any)=>{
    console.log("data",data)
    this.Destination = data.contactdetination
          
  })
}
}
