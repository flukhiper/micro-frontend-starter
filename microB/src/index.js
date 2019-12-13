import * as React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import htmlToReact from 'html-to-react'
import PropTypes from 'prop-types'

import Main from './Main'

class SomeToExportElement extends HTMLElement {

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    const propTypes = Main.propTypes ? Main.propTypes : {};
    const events = Main.propTypes ? Main.propTypes : {};
    const props = {
      ...this.getProps(this.attributes, propTypes),
      ...this.getEvents(events),
      children: this.parseHtmlToReact(this.innerHTML)
    };

    render(<Main {...props}/>, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  parseHtmlToReact(html) {
    return html && new htmlToReact.Parser().parse(html);
  }

  getProps(attributes, propTypes) {
    propTypes = propTypes|| {};
    return [ ...attributes ]         
      .filter(attr => attr.name !== 'style')         
      .map(attr => this.convert(propTypes, attr.name, attr.value))
      .reduce((props, prop) => 
        ({ ...props, [prop.name]: prop.value }), {});
  }

  getEvents(events) {
    return Object.keys(events)
      .filter(key => events[key] === PropTypes.func)
      .reduce((prev, curr) => ({
        ...prev,
        [curr]: args => this.dispatchEvent(new CustomEvent(curr, {detail:{...args}}))
      }), {});
  }

  convert(propTypes, attrName, attrValue) {
    const propName = Object.keys(propTypes)
      .find(key => key.toLowerCase() == attrName);
    let value = attrValue;
    if (attrValue === 'true' || attrValue === 'false') 
      value = attrValue == 'true'; 
    else if (!isNaN(attrValue) && attrValue !== '') 
      value = +attrValue; 
    else if (/^{.*}/.exec(attrValue)) 
      value = JSON.parse(attrValue);
    return {         
      name: propName ? propName : attrName,         
      value: value      
    };
  }
}
customElements.define('micro-b', SomeToExportElement)
