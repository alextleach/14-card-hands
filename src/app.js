'use strict';
import Hand from 'hand';

export default class App {

  constructor(element) {
    this.element = element;
  }

  start() {
    fetch(`https://card-proxy.herokuapp.com/decks/new`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (var i = 0; i < 5; i++) {
          const newHand = new Hand(data.deck_id);
          this.element.querySelector('.app-container')
            .appendChild(newHand.element);

          newHand.getData().then(() => {
            newHand.render();
          });
        }
      });
  }
}
