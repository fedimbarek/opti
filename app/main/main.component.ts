import { Component, OnInit } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchText:any
  user:any
  userData={email:"",password:"",nom:"",prenom:"",cin:"",telephone:"",picture:"",moyen_transport:"",adresse:"",etat_active:""}

  constructor(private responsable:ApiAgentService,private toastr: ToastrService) {
    this.generateDays();
   }
  date: Date = new Date();
  month: number = this.date.getMonth();
  year: number = this.date.getFullYear();
  days: number[] = [];
  prevMonth() {
    this.month--;
    if (this.month < 1) {
      this.month = 12;
      this.year--;
    }
    this.generateDays();
  }

  nextMonth() {
    this.month++;
    if (this.month > 12) {
      this.month = 1;
      this.year++;
    }
    this.generateDays();
  }

  private generateDays() {
    this.days = Array.from({length: new Date(this.year, this.month + 1, 0).getDate()}, (_, i) => i + 1);
  }
  
  isToday(day: number): boolean {
    const todayDate = new Date();
    const isToday = this.year === todayDate.getFullYear() &&
                   this.month === todayDate.getMonth() + 1 && // Add 1 to make it 1-based
                   day === todayDate.getDate();
    console.log(`Checking if ${day}/${this.month}/${this.year} is today: ${isToday}`);
    return isToday;
  }
  
  
  
  
  //  date: Date=  new Date(); ;

  //  updateDate(event:any) {
    //  this.date = new Date(event.target.value);
    //  console.log(this.date);
  //  }
//  // date = new Date();
  // month = this.date.getMonth();
  // year = this.date.getFullYear();
  // days = Array.from({length: new Date(this.year, this.month + 1, 0).getDate()}, (_, i) => i + 1);
  ngOnInit(): void {
    this.getresponsable();
  }
  formErrors = {
    nom:'',
    prenom :'',
    email: '',
    password: '',
    cin:'',
    telephone:''
  };
  validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  validatePassword(password: string): boolean {
    // Add your password validation logic here
    return password.length >= 8  ;
  }
  validatecin(cin: string): boolean {
    // Add your password validation logic here
    return cin.length == 8;
  }
  validateTel(telephone: string): boolean {
    // Add your password validation logic here
    return telephone.length == 8;
  }
  validateForm(): boolean {
    let isValid = true;
    if (this.userData.nom === '') {
      this.formErrors.nom = 'nom is required';
      isValid = false;
    }
    if (this.userData.prenom === '') {
      this.formErrors.prenom = 'prenom is required';
      isValid = false;
    }

    if (this.userData.email === '') {
      this.formErrors.email = 'email is required';
      isValid = false;
    }else
    if (!this.validateEmail(this.userData.email)) {
      this.formErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      this.formErrors.email = '';
    }
    if (this.userData.password === '') {
      this.formErrors.password = 'Password is required';
      isValid = false;
    }else
    if (!this.validatePassword(this.userData.password)) {
      this.formErrors.password = 'Password should be at least 8 characters';
      isValid = false;
    } else {
      this.formErrors.password = '';
    }
    if (this.userData.cin === '') {
      this.formErrors.cin = 'cin is required';
      isValid = false;
    }else
    if (!this.validatecin(this.userData.cin)) {
      this.formErrors.cin = 'Cin should be  8 characters';
      isValid = false;
    } else {
      this.formErrors.cin = '';
    }
    if (this.userData.telephone === '') {
      this.formErrors.telephone = 'Tel is required';
      isValid = false;
    }else
    if (!this.validateTel(this.userData.telephone)) {
      this.formErrors.telephone = 'Tel should be  8 characters';
      isValid = false;
    } else {
      this.formErrors.telephone = '';
    }
    return isValid;
  }
  
  
  ajouter(){
    if (this.validateForm()) {
    this.responsable.addresponsable(this.userData).subscribe((data:any)=>{
  console.log('dataaaa',data);
  this.toastr.success('Hello, Ajouter avec success responsable!', 'Success');
  this.ngOnInit()

    })
  }
  }
  getresponsable(){
    this.responsable.getresponsable().subscribe((data:any)=>{
      console.log("data",data)
      this.user=data.contactList.filter((agent: any) => agent.role !== 'admin');
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
}
