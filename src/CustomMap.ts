// instructions to every other classs on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // ini artinya googleMap merupakan instance dari class Map
  // default di dalam TS adalah public ketika kita define a property di dalam class jadi sebenernya kita bisa saja tanpa tulis public
  // karena kita mau limit its visibility, kita gunakan private (gabisa di reference from outside of the class)
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    // Marker butuh sesuatu untuk parameternya berupa object dengan interface MarkerOptions
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
