import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
user:any
permission:any
userData={email:"",password:"",nom:"",prenom:"",cin:"",telephone:"",picture:"",moyen_transport:"",adresse:"",etat_active:""}
modifuser: any = { id: '', email: "", password: "", nom: "", prenom: "", cin: "", telephone: "", picture: "", moyen_transport: "", adresse: "", etat_active: "" };
searchText:any
searchText1:any
  constructor(private api:ApiAgentService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getAgent()
    this.getPermission()
  }
  getAgent(){
    this.api.getagent().subscribe((data:any)=>{
      console.log("data",data)
      this.user=data.contactList;
    })
  
  }
  ajouter(){
    this.api.addagent(this.userData).subscribe((data:any)=>{
  console.log('dataaaa',data);
  this.getAgent()
    })
  }
  getPermission(){
    this.api.getlistepermissio().subscribe((data:any)=>{
      console.log("data",data)
      this.permission=data.contactpermission;
    })
      
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // Assign the base64 representation of the image to 'userData.image'
        this.userData.picture = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
  modifierid(agent:any){
    this.modifuser = {
      id: agent.id,
      email: agent.email,
      password: agent.password,
      nom: agent.nom,
      prenom: agent.prenom,
      cin: agent.cin,
      telephone: agent.telephone,
      moyen_transport: agent.moyen_transport,
      adresse: agent.adresse,
      etat_active: agent.etat_active,
      picture: agent.picture
    };
    console.log(  this.modifuser);
  
  }
  
//  modif(id:number){
//    this.contact.updatecontact(id,this.modifuser).subscribe((data:any)=>{
//      console.log("data",data);
//      this.getData();
//      
//    })
//  }


//  onFileSelectedForUpdate(event: any) {
//    if (event.target.files) {
//      const file = event.target.files[0];
//      const reader = new FileReader();
//  
//      reader.onload = (e: any) => {
//        // Assign the base64 representation of the image to 'modifuser.image'
//        this.modifuser.image = e.target.result;
//      };
//  
//      reader.readAsDataURL(file);
//    }
//  }
}



