import { LitElement, html } from 'lit';
import { actions } from './utils/actions';

export class MyElement extends LitElement {

   constructor(){
      super();
      this.actions = actions;
    }
  render() {
    return html`
      <button @click=${this.actions.ejecutarUbicacion()}>
        Obtener ubicación
      </button>
    `;
  }
}

customElements.define('my-element', MyElement);