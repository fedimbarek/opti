import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanningComponent } from './planning/planning.component';
import { LoginComponent } from './login/login.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailPlannigComponent } from './detail-plannig/detail-plannig.component';
import { DestinationComponent } from './destination/destination.component';
import { Dash1Component } from './dash1/dash1.component';
import { Main1Component } from './main1/main1.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { ProfilComponent } from './profil/profil.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { LogAdComponent } from './log-ad/log-ad.component';
import { Planning1Component } from './planning1/planning1.component';
import { Destination1Component } from './destination1/destination1.component';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    MainComponent,
    TableComponent,
    NavbarComponent,
    PlanningComponent,
    LoginComponent,
    DetailPlannigComponent,
    DestinationComponent,
    Dash1Component,
    Main1Component,
    ListAgentComponent,
    Sidebar1Component,
    ProfilComponent,
    LogAdComponent,
    Planning1Component,
    Destination1Component
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ScheduleModule, RecurrenceEditorModule,
    GoogleMapsModule,
    QRCodeModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
