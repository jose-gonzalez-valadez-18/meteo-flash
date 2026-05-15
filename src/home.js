import { LitElement, html } from "lit";
import { actions } from "./utils/actions";
import { ifs } from "./utils/ifs";
import { icons } from "./assets/icons/icons";

import styles from "./home.styles";

import "./layout/header/app-header";
import "./components/mini-card-vertical/mini-card-vertical";

export class Home extends LitElement {
  static styles = styles;

  static properties = {
    weatherData: { type: Object },
    locationData: { type: Object },
    loading: { type: Boolean },
    weatherCode: { type: Number },
  };

  constructor() {
    super();
    this.actions = actions;
    this.locationData = {};
    this.weatherData = {};
    this.loading = true;
    this.weatherCode = 0;
    this.time = "2026-05-15T14:00";
  }

  connectedCallback() {
    super.connectedCallback();

    this.actions.location.addEventListener("location-data", (e) => {
      this.locationData = e.detail;
      this.loading = false;
    });

    this.actions.weather.addEventListener("weather-data", (e) => {
      this.weatherData = e.detail;
      this.loading = false;
    });

    this.actions.ejecutarUbicacion();
    this.actions.ejecutarPronosticoClima();
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        ${this.loading || !this.locationData || !this.weatherData?.current
          ? html`<h2>Obteniendo ubicación...</h2>`
          : html`
              <section class="main-info">
                <article class="info-location">
                  <article class="location">
                    <p class="district">${this.locationData.alcaldia},</p>
                    <p class="city">${this.locationData.city}</p>
                  </article>

                  <p class="date">${this.actions.obtenerFecha()}</p>
                </article>

                <article class="info-forecast" style="background-image: url('${ifs.obtenerImagenClima(this.weatherData.current.weather_code, this.weatherData.current.time)}');">
                  <div class="overlay">
                    <p class="temperature">${this.weatherData.current.temperature_2m}°C</p>

                    <div class="weather-details">
                      <p class="weather-description">${ifs.obtenerTextoClima(this.weatherData.current.weather_code)}</p>
                      <p class="apparent-temperature">Sensación térmica: ${this.weatherData.current.apparent_temperature}°C</p>
                    </div>
                  </div>
                </article>
              </section>
              <section class="week-info">
                <h2>Pronóstico de 7 días</h2>

                <div class="week-cards">
                  ${this.weatherData.daily.time.map(
                    (day, index) => html`
                      <mini-card-vertical
                        .day=${day}
                        .weatherCode=${this.weatherData.daily.weather_code[index]}
                        .temperatureMax=${this.weatherData.daily.temperature_2m_max[index]}
                        .temperatureMin=${this.weatherData.daily.temperature_2m_min[index]}></mini-card-vertical>
                    `,
                  )}
                </div>
              </section>
            `}
      </main>
    `;
  }
}

customElements.define("page-home", Home);
