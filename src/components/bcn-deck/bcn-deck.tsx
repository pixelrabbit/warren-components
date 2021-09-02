import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'bcn-deck',
  styleUrl: 'bcn-deck.scss',
  shadow: true,
})
export class BcnDeck {

  @Prop() cards;

  render() {
    return (
      <Host>
        {this.cards.map((card) =>
        <bcn-card>
          <span slot="title">{card.title}</span>
          <span slot="body">{card.body}</span>
        </bcn-card>
        )}
      </Host>
    );
  }

}
