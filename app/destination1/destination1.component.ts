import { Component, OnInit,ViewChild , ElementRef, NgZone } from '@angular/core';
import { ApiAgentService } from '../services/api-agent.service';

@Component({
  selector: 'app-destination1',
  templateUrl: './destination1.component.html',
  styleUrls: ['./destination1.component.css']
})
export class Destination1Component implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  searchText:any
  searchText2:any
  user:any
  map!: google.maps.Map;
  constructor(private api:ApiAgentService,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getdestination()
  }
  getdestination(){
    this.api.getDestination().subscribe((data:any)=>{
      console.log("data",data)
      this.user = data.contactdetination
         this.initMap();   
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
