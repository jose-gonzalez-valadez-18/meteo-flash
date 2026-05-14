import { location } from "./getLocation";

class Actions extends EventTarget {
  constructor() {
    super();
    this.location = location;
  }

  ejecutarUbicacion() {
    return this.location.getLocation();
  }

  obtenerFecha() {
    return this.location.getFormattedDate();
  }
}

export const actions = new Actions();
