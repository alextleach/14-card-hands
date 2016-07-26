export default class Hand {

  constructor(deckId) {
    this.deckId = deckId;
    this.element = document.createElement('div');
    this.element.classList.add('row');
  }

  getData() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deckId}/draw?count=5`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        console.log(data);
      });
  }
  render() {
    const cardItem = this.data.cards.map((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      cardElement.innerHTML = `
        <div class="card__image">
          <img src="${card.image}" alt="" class="card__image__img">
        </div>
        <h3 class="card__value">${card.value}</h3>
  `;

      return cardElement;
    });
    cardItem.forEach((cardItem) => {
      this.element.appendChild(cardItem)
    });
  }
}
