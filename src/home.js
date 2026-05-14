import { LitElement, html } from "lit";
import { actions } from "./utils/actions";

import styles from "./home.styles";

import "./layout/header/app-header";

export class Home extends LitElement {
  static styles = styles;

  static properties = {
    locationData: { type: Object },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.actions = actions;
    this.locationData = {};
    this.loading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.actions.location.addEventListener("location-data", (e) => {
      this.locationData = e.detail;
      this.loading = false;
    });

    this.actions.ejecutarUbicacion();
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <section class="info-location">
          ${this.loading
            ? html`<h2>Obteniendo ubicación...</h2>`
            : html`
                <p class="district">${this.locationData.alcaldia},</p>
                <p class="city">${this.locationData.city}</p>
              `}
        </section>
        <section class="">
          <p>${this.actions.obtenerFecha()}</p>
        </section>
      </main>
    `;
  }
}

customElements.define("page-home", Home);
