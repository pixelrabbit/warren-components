import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'bcn-button',
  styleUrl: 'bcn-button.scss',
  shadow: true
})
export class BcnButton {

  @Prop() variant: string;

  render() {
    return (
      <Host>
        <button type="button">
          <slot>Button</slot>
        </button>
      </Host>
    ); 
  }

}
