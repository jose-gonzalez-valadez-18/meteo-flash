import { LitElement, html } from "lit";
import { ifs } from "../../utils/ifs";
import { icons } from "../../assets/icons/icons";

import styles from "./mini-card-vertical.styles";

export class MiniCardVertical extends LitElement {
  static styles = styles;

  static properties = {
    day: { type: String },
    weatherCode: { type: Number },
    temperatureMax: { type: Number },
    temperatureMin: { type: Number },
  };

  constructor() {
    super();
    this.ifs = ifs;
    this.day = "";
    this.weatherCode = 0;
    this.temperatureMax = 0;
    this.temperatureMin = 0;
  }

  obtenerDia(dateString) {
    const date = new Date(`${dateString}T00:00`);

    return date.toLocaleDateString("es-MX", {
      weekday: "short",
    }).toUpperCase();
  }

  render() {
    return html`
      <article class="card-vertical">
        <a href="" class="card">
          <p class="title">${this.obtenerDia(this.day)}</p>

          <span>${this.ifs.obtenerIcono(this.weatherCode)}</span>

          <p class="temperature">${Math.round(this.temperatureMax)}°C</p>
          <p class="apparent-temperature">${Math.round(this.temperatureMin)}°C</p>

        </a>
      </article>
    `;
  }
}

customElements.define("mini-card-vertical", MiniCardVertical);