import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bcn-link',
  styleUrl: 'bcn-link.scss',
  shadow: true,
})
export class BcnLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
