import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userData={email:"",password:"",nom:"",prenom:"",cin:"",telephone:"",picture:"",moyen_transport:"",adresse:"",etat_active:""}
  searchText:any;
  user:any
  Agent:any;
  emaildata={subject:"",toEmail:"",body:""}
  constructor(private agent:ApiAgentService,private toastr: ToastrService) { }
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
  ngOnInit(): void {
    this.getAgent();
    this.getAgent1();
  }
  ajouter(){
    if (this.validateForm()) {
    this.agent.addagent(this.userData).subscribe((data:any)=>{
  console.log('dataaaa',data);
  this.toastr.success('Hello, Ajouter avec success responsable!', 'Success');

    })
  }
  }
  getAgent1(){
    this.agent.getagent().subscribe((data:any)=>{
      console.log("dataAgent",data)
      this.Agent=data.contactList;
    })
  
  }
  getAgent(){
    this.agent.getlistepermissio().subscribe((data:any)=>{
      console.log("data",data)
      this.user=data.contactpermission;
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

  SendEmail(){
    this.agent.sendEmail(this.emaildata).subscribe((data:any)=>{
      console.log("data",data)
      this.toastr.success('Hello, Email envoyé avec success!', 'Success');
      })
  }
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
