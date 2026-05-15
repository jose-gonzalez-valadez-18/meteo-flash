import { LitElement, html } from "lit";
import { actions } from "../../utils/actions";
import { icons } from "../../assets/icons/icons";

import styles from "./app-header.styles";

export class AppHeader extends LitElement {
  static styles = styles;

  constructor() {
    super();
    this.actions = actions;
  }
  render() {
    return html`
      <header>
        <a href="/" class="container-logo" aria-label="Mejor pronostico del clima Meteo-Flash">
          <img src="/src/assets/logo.webp" href="" alt="$1" />
          <h1>Meteo-Flash</h1>
        </a>
        <div class="container-search">
          <span class="icon">${icons.search}</span>
          <input placeholder="Buscar..." />
        </div>
        <nav>
          <ul>
            <li>
              <a class="button-header" href="">${icons.cityHeart}</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
