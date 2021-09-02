import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bcn-card',
  styleUrl: 'bcn-card.scss',
  shadow: true,
})
export class BcnCard {

  render() {
    return (
      <Host>
        <div class="header">
          <h3><slot name='title' /></h3>
        </div>
        <div class="main">
          <slot name="body" />
        </div>
        <div class="footer">
          <bcn-button>Card Button</bcn-button>
        </div>
      </Host>
    );
  }

}
