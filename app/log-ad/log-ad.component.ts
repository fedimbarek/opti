import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-ad',
  templateUrl: './log-ad.component.html',
  styleUrls: ['./log-ad.component.css']
})
export class LogAdComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService:AuthService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        () => {
          // Rediriger vers la page suivante après une connexion réussie
          // Par exemple, utiliser Router.navigate(['/next-page']);
        //  this.router.navigate(['/']);
        this.authService.handleRoleNavigation();
        },
        error => {
        //  this.errorMessage = error.message;
        }
      );
      this.authService.login1(this.email, this.password)
  .subscribe(
    () => {
      // Rediriger vers la page suivante après une connexion réussie
      // Par exemple, utiliser Router.navigate(['/next-page']);
    //  this.router.navigate(['/']);
    this.authService.handleRoleNavigation();
    this.toastr.success('Hello, this is a success toast!', 'Success');

    },
    error => {
      // this.errorMessage = error.message;
      this.toastr.error('Hello, this is an error toast!', 'Error');

    }
  );
  }
  private handleRoleNavigation(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['/listadmin']);
        break;
      case 'enseignant':
        this.router.navigate(['/List']);
        break;
      case 'etudiant':
        this.router.navigate(['/listetud']);
        break;
      // Ajoutez d'autres cas selon vos besoins
      default:
        // Fallback vers une page par défaut ou gestion d'erreur
        break;
    }
  }
}
