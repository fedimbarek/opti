import { Component, OnInit, ViewChild , ElementRef, NgZone} from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  searchText:any
  searchText2:any
  user:any
  userDestination={title:"",description:"",latitude:0,longitude:0}
  modifDestination: any = { id: '', title:"",description:"",latitude:0,longitude:0};


  constructor(private api:ApiAgentService,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getdestination()
  }
  ajouter(){
    this.api.adddestination(this.userDestination).subscribe((data:any)=>{
  console.log('dataaaa',data);
  this.ngOnInit();
  //this.getAgent()
    })
  }
  map!: google.maps.Map;
  getdestination(){
    this.api.getDestination().subscribe((data:any)=>{
      console.log("data",data)
      this.user = data.contactdetination
      this.initMap();   
    })
  }
 
  delete(id:any){
    this.api.deleteDestination(id)
    //subscribe t9ra respense mt3 lbackend
    .subscribe(
      res=>{
        console.log(res);
        //appel ll fonction hethi bech y3awd yafichili data jdida mb3d mfs5t mnha object
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    )

  }
  modifierid(agent:any){
    this.modifDestination = {
      _id: agent._id,
      title: agent.title,
      description: agent.description,
      latitude: agent.latitude,
      longitude: agent.longitude,
    };
    console.log(  this.modifDestination);
  
  }
  modif(id:any){
    this.api.updateDestination(id,this.modifDestination).subscribe((data:any)=>{
      console.log("data",data);
      this.getdestination();
      
    })
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 33.30468862911847,
      lng: 9.42758744767839
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
/*handlePlaceChange(place: google.maps.places.PlaceResult) {
  this.center = {
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  };
}*/
ngAfterViewInit() {
  this.initMap();
  this.initAutocomplete();
}

initAutocomplete() {
  const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement);

  autocomplete.addListener('place_changed', () => {
    this.ngZone.run(() => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        console.error("Invalid place geometry");
        return;
      }
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    });
  });
}


/*initMap() {
  this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 33.30468862911847, lng: 9.42758744767839 },
    zoom: 6,
  });

  // Add markers for each location
  this.user.forEach((location: any) => {
    new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
      map: this.map,
      title: location.title
    });
  });
}*/
initMap() {
  this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 33.30468862911847, lng: 9.42758744767839 },
    zoom: 6,
  });

  // Add markers for each location
  this.user.forEach((location: any) => {
    const marker = new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
      map: this.map,
      title: location.title
    });

    // Add click event listener to the marker
    marker.addListener('click', () => {
      this.display = {
        lat: location.latitude,
        lng: location.longitude
      };
    });
  });
}
}
