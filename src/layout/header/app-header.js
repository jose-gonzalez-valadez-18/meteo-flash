import { LitElement, html } from 'lit';
import { actions } from './utils/actions';

export class AppHeader extends LitElement {

   constructor(){
      super();
      this.actions = actions;
    }
  render() {
    return html`
      <header>
        
      </header>
    `;
  }
}

customElements.define('app-header', MyElement);