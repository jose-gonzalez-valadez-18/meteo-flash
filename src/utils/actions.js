import { location } from './getLocation';

class Actions extends EventTarget {
constructor(){
    super();
    this.location = location;
}

  ejecutarUbicacion() {
    this.location.getLocation();
  }
}

export const actions = new Actions();