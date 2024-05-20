import { Component, Input, OnInit } from '@angular/core';
import { ApiPlanningService } from '../services/api-planning.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-plannig',
  templateUrl: './detail-plannig.component.html',
  styleUrls: ['./detail-plannig.component.css']
})
export class DetailPlannigComponent implements OnInit {
  @Input() agent: any;
  @Input() planning: any;
  id:any
  constructor(private planningService:ApiPlanningService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
   /* this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getPlanningById(id);
      }
    });*/
   
  this.id=this.route.snapshot.params["id"];
  this.getPlanningById()
  
  }
  getPlanningById()  {
    this.planningService.getPlanningById(this.id).subscribe(
      data => {
        console.log("data",data)
        this.planning = data.planning
        ;
      },
      error => {
        console.log(error);
      }
    );
  }

  formatDate(dateString: string): string {
    // Extract date parts from the date string
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // January is 0, so we add 1 to get the correct month
    const day = date.getDate();

    // Construct the formatted date string
    return `${year}-${this.padZero(month)}-${this.padZero(day)}`;
}

private padZero(value: number): string {
    // Add leading zero if value is less than 10
    return value < 10 ? `0${value}` : `${value}`;
}
 
  }     