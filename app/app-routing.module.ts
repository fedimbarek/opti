import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PlanningComponent } from './planning/planning.component';
import { DetailPlannigComponent } from './detail-plannig/detail-plannig.component';
import { DestinationComponent } from './destination/destination.component';
import { Dash1Component } from './dash1/dash1.component';
import { Main1Component } from './main1/main1.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { ProfilComponent } from './profil/profil.component';
import { LogAdComponent } from './log-ad/log-ad.component';
import { Planning1Component } from './planning1/planning1.component';
import { Destination1Component } from './destination1/destination1.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"logad",component:LogAdComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path: '', redirectTo: 'main', pathMatch: 'full' },
    {path:'main',component:MainComponent},
   // {path:'table',component:TableComponent},
   {path:'ListAgent',component:ListAgentComponent},
    {path:'planing1',component:Planning1Component},
    { path: 'planning/:id', component: DetailPlannigComponent },
    {path:'destination1',component:Destination1Component},
  ]},
  {path: "dash",component:Dash1Component,canActivate:[AuthGuard],children:[
    {path:'',component:Main1Component},
    {path:'table',component:TableComponent},
   // {path:'ListAgent',component:ListAgentComponent},
    {path:'planing',component:PlanningComponent},
    { path: 'planning/:id', component: DetailPlannigComponent },
    {path:'destination',component:DestinationComponent},
    {path:"profil",component:ProfilComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
