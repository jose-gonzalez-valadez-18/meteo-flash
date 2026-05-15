import { location } from "./services/getLocation";
import { weather } from "./services/getWeather";


class Actions extends EventTarget {
  constructor() {
    super();
    this.location = location;
    this.weather = weather;
  }

  ejecutarUbicacion() {
    this.location.getLocation();
  }
  
  ejecutarPronosticoClima() {
    this.weather.getWeather();
  }

  obtenerFecha() {
    return this.location.getFormattedDate();
  }
  
}

export const actions = new Actions();
