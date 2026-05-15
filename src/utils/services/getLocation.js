class GetLocation extends EventTarget {
  static properties = {
    latitude: { type: Number },
    longitude: { type: Number },
    url: { type: String },
    jsonData: { type: Array },
  };

  constructor() {
    super();

    this.latitude = null;
    this.longitude = null;
    this.url = "";
    this.jsonData = [];
  }

  async getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.latitude = coords.latitude;
        this.longitude = coords.longitude;

        this.getLocationName();
      });
    }
  }

  getFormattedDate() {
    const fecha = new Date();

    const texto = fecha.toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  normalizeLocation(data) {
    const address = data.address || {};

    return {
      alcaldia: address.municipality || address.city_district || address.borough || "",

      city: address.city || address.town || address.village || "",

      latitude: Number(data.lat),

      longitude: Number(data.lon),
    };
  }

  sendData(data) {
    this.dispatchEvent(
      new CustomEvent("location-data", {
        detail: data,
      }),
    );
  }

  async getLocationName() {
    if (this.latitude != null && this.longitude != null) {
      this.url = `https://nominatim.openstreetmap.org/reverse?lat=${this.latitude}&lon=${this.longitude}&format=json`;

      const res = await fetch(this.url);

      const data = await res.json();

      this.jsonData = this.normalizeLocation(data);

      this.sendData(this.jsonData);

      return this.jsonData;
    }
  }
}

export const location = new GetLocation();
