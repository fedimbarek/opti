import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAgentService {

 // private apiUrl = 'http://localhost:8000/api'; // Replace with your Symfony API URL
  private apiUrl = 'http://localhost:5000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/agents`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/test_agents`, user);
  }
  addagent(user:any){
    
    return this.http.post("http://localhost:5000/users/signup",user);
  }

  createTache(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/taches`, user);
  }
  getTache(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/taches`);
  }
  
  addresponsable(user:any){
    return this.http.post("http://localhost:5000/users/signupr",user);
  }
  getagent(){
    return this.http.get("http://localhost:5000/users/listeragent");
  }

  getPlanning(){
    return this.http.get("http://localhost:5000/users/afficherplannig");
  }
  adddestination(user:any){
    return this.http.post("http://localhost:5000/users/destination",user);
  }
  getDestination(){
    return this.http.get("http://localhost:5000/users/listerdestination");
  }
 
  deleteDestination(id:any){
    return this.http.delete("http://localhost:5000/users/supprimerdestination/"+id);
  }
  getresponsable(){
    return this.http.get("http://localhost:5000/users/listeragentr");
  }
 /* updateAgent(agent: any): Observable<any> {
    return this.http.put(`http://localhost:5000/users/modifier/${agent._id}`, agent);
  }
  updateAgent1(_id: any, user: any){
    return this.http.put(`${this.apiUrl}/modifier/${_id}`, user);
  }*/
  updateAgent2(_id: any, agent: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/modifier/${agent._id}`, agent);
  }
  updateDestination(_id: any, agent: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/modifierdestination/${agent._id}`, agent);
  }

  getlistepermissio(){
    return this.http.get("http://localhost:5000/users/listepermission");
  }
  sendEmail(user:any){
    return this.http.post("http://localhost:5555/api/sendEmail",user);
  }
}
