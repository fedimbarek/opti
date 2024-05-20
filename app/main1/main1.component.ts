import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {

  userData={email:"",password:"",nom:"",prenom:"",cin:"",telephone:"",picture:"",moyen_transport:"",adresse:"",etat_active:""}
  constructor(private responsable:ApiAgentService) { }
  ngOnInit(): void {
  }
  ajouter(){
    this.responsable.addresponsable(this.userData).subscribe((data:any)=>{
  console.log('dataaaa',data);
    })
  }


}
