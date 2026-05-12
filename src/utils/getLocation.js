class GetLocation extends EventTarget {

  static properties = {
    latitude: { type: Number },
    longitude: { type: Number }
  };

  constructor() {
    super();
    this.latitude = null;
    this.longitude = null;
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.latitude = coords.latitude;
          this.longitude = coords.longitude;

          console.log(this.latitude, this.longitude);
        }
      );
    }
  }
}

export const location = new GetLocation();