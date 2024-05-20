/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users';
  constructor(private http: HttpClient,private router:Router) { }
  canActiv=false;
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { email, password })
      .pipe(
        tap(response => {
          this.canActiv=true;
          // Stocker le token dans le stockage local
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout(): void {
    // Supprimer le token du stockage local lors de la déconnexion
    this.canActiv=false;
    this.router.navigate(['']);
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    // Récupérer le token du stockage local
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    // Vérifier si l'utilisateur est authentifié en vérifiant la présence du token
    const token = this.getToken();
    return token !== null;
  }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient, private router: Router) { }

  canActiv = false;

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { email, password })
      .pipe(
        tap(response => {
          this.canActiv = true;
          // Store user data including token, role, and profile in local storage
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
        })
      );
  }
  login1(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signinr`, { email, password })
      .pipe(
        tap(response => {
          this.canActiv = true;
          // Store user data including token, role, and profile in local stora
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout(): void {
    this.canActiv = false;
    this.router.navigate(['']);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  handleRoleNavigation(): void {
    const role = this.getUserRole();
    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard']);
        break;
      case 'responsable':
        this.router.navigate(['/dash']);
        break;
      default:
        this.router.navigate(['/agent']);
        break;
    }
  }

  // Methods to get and update user roles and profiles
  getUserRole(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || null;
  }

  setUserRole(role: string): void {
    if (role === 'admin' || role === 'responsable') {
      let user = JSON.parse(localStorage.getItem('user') || '{}');
      user.role = role;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      console.error('Invalid role. Role must be "admin" or "agent".');
    }
  }

  getUserProfile(): any {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.profile || null;
  }

  setUserProfile(profile: any): void {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.profile = profile;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listeragent`);
  }
}
