import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { ApiPlanningService } from '../services/api-planning.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  searchText:any;
  user:any;
  Agent:any;
  Destination:any
  selectedAgent: any;
  userPlannig={nom_dagent:"",date:"",title:"",Tache:""}
  modifPlannig :any = { id: '',nom_dagent:"",date:"",title:"",Tache:""}
  constructor(private api:ApiAgentService,private planning:ApiPlanningService) { }

  ngOnInit(): void {
    this.getplanning();
    this.getAgent();
    this.getdestination()
  }
ajouter(){
this.planning.ajouterPlannig(this.userPlannig).subscribe((res)=>{
  console.log('dataaaa',res);
  this.ngOnInit();
})
}
  getplanning(){
    this.api.getPlanning().subscribe((data:any)=>{
      console.log("data",data)
      this.user=data.planningList;
    })
    
  }
  showDetail(agent: any): void {
    this.selectedAgent = agent;
  }

  getAgent(){
    this.api.getagent().subscribe((data:any)=>{
      console.log("dataAgent",data)
      this.Agent=data.contactList;
    })
  
  }

  modifierid(agent:any){
    const formattedDate = new Date(agent.date).toISOString().split('T')[0];
    this.modifPlannig = {
      id: agent._id,
      nom_dagent: agent.nom_dagent?.nom,
      date: formattedDate,
      title:agent.title?.title,
      Tache:agent.Tache
    };
    console.log(  this.modifPlannig);
  
  }

  modif(id:any){
    this.planning.updatePlannig(id,this.modifPlannig).subscribe((data:any)=>{
      console.log("data",data);
      this.getplanning();
      
    })
  }

  showInput: boolean = false;
  selectedOption: string = '1';
  // toggleInput() {
    // this.showInput = !this.showInput;
  // }
 /* modif(id: any) {
    const url = `${this.planning.getApiUrl()}Modifierplannig/${id}`;
    this.planning.updatePlannig(url, this.modifPlannig).subscribe(
      (data: any) => {
        console.log("Data", data);
        this.getplanning();
      },
      (error: any) => {
        console.error("Error", error);
      }
    );
  }
  */

  formatDate(dateString: string): string {
    // Extract date parts from the date string
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // January is 0, so we add 1 to get the correct month
    const day = date.getDate();

    // Construct the formatted date string
    return `${year}-${this.padZero(month)}-${this.padZero(day)}`;
}

private padZero(value: number): string {
    // Add leading zero if value is less than 10
    return value < 10 ? `0${value}` : `${value}`;
}

getdestination(){
  this.api.getDestination().subscribe((data:any)=>{
    console.log("data",data)
    this.Destination = data.contactdetination
          
  })
}
owInput: boolean = false;
 toggleInput() {
   this.showInput = !this.showInput;
 }

 showInput2: boolean = false;
 toggleInput2() {
   this.showInput2 = !this.showInput2;
 }

 showInput3: boolean = false;
 toggleInput3() {
   this.showInput3 = !this.showInput3;
 }

 showInput4: boolean = false;
 toggleInput4() {
   this.showInput4 = !this.showInput4;
 }
}
