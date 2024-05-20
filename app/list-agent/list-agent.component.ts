import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {
  
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
    formErrors = {
      email: '',
      password: ''
    };
    validateEmail(email: string): boolean {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    }
    validatePassword(password: string): boolean {
      // Add your password validation logic here
      return password.length >= 8;
    }
    validateForm(): boolean {
      let isValid = true;
      if (!this.validateEmail(this.userData.email)) {
        this.formErrors.email = 'Invalid email format';
        isValid = false;
      } else {
        this.formErrors.email = '';
      }
      if (!this.validatePassword(this.userData.password)) {
        this.formErrors.password = 'Password should be at least 8 characters';
        isValid = false;
      } else {
        this.formErrors.password = '';
      }
      return isValid;
    }
    getAgent(){
      this.api.getagent().subscribe((data:any)=>{
        console.log("data",data)
        this.user=data.contactList;
      })
    
    }
    getPermission(){
      this.api.getlistepermissio().subscribe((data:any)=>{
        console.log("data",data)
        this.permission=data.contactpermission;
      })
        
    }
    ajouter(){
      this.api.addagent(this.userData).subscribe((data:any)=>{
    console.log('dataaaa',data);
    this.getAgent()
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
        _id: agent._id,
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
  /*  updateAgentData(id:any): void {
      this.api.updateAgent1(id,this.modifuser).subscribe(
        (data) => {
          console.log("Agent updated:", data);
          this.getAgent();  // Refresh the agent list
        },
        (error) => {
          console.error("Error updating agent:", error);
        }
      );
    }*/
  /*  updateAgentData(): void {
      this.api.updateAgent1(this.modifuser.id, this.modifuser).subscribe(
        (data) => {
          console.log("Agent updated:", data);
          this.getAgent();  // Refresh the agent list
        },
        (error) => {
          console.error("Error updating agent:", error);
        }
      );
    }*/
    toggleStatus(agent: any): void {
      agent.etat_active = agent.etat_active === 'Active' ? 'Inactive' : 'Active';
      this.modifierid(agent);  // Set the modifuser object
      ///this.updateAgentData();  // Update the agent in the database
      this.modif(agent.etat_active);
    }
    modif(id:number){
      this.api.updateAgent2(id,this.modifuser).subscribe((data:any)=>{
        console.log("data",data);
        this.getAgent();
        
      })
    }
  
  
    
  //  modif(id:number){
  //    this.contact.updatecontact(id,this.modifuser).subscribe((data:any)=>{
  //      console.log("data",data);
  //      this.getData();
  //      
  //    })
  //  }
  
  
    onFileSelectedForUpdate(event: any) {
      if (event.target.files) {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          // Assign the base64 representation of the image to 'modifuser.image'
          this.modifuser.image = e.target.result;
        };
    
        reader.readAsDataURL(file);
      }
    }

 /* toggleStatus(agent: any): void {
    agent.etat_active = agent.etat_active === 'Active' ? 'Inactive' : 'Active';
    this.api.updateAgent(agent).subscribe((data: any) => {
      console.log('Agent updated:', data);
    });
  }
*/
/*toggleStatus(agent: any): void {
  agent.etat_active = agent.etat_active === 'Active' ? 'Inactive' : 'Active';
  this.modifierid(agent);  // Set the modifuser object
  ///this.updateAgentData();  // Update the agent in the database

}*/


}
