import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlanningService {
  private apiUrl = 'http://localhost:5000/users/';
  constructor(private http: HttpClient) { }

  getPlanningById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}afficherplanning/${id}`);
  }
  ajouterPlannig(planning:any){
    return this.http.post("http://localhost:5000/users/plannig",planning)
  }

  updatePlannig(_id: any, agent: any): Observable<any> {
    //return this.http.put(`${this.apiUrl}Modifierplannig/${agent._id}`, agent); 
    return this.http.put(`${this.apiUrl}Modifierplannig/${_id}`, agent);

  }
  // updatePlannig(url: string, agent: any): Observable<any> {
    // return this.http.put(url, agent);
  // }

  // public getApiUrl(): string {
    // return this.apiUrl;
  // }
}
