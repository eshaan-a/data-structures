class Card {
  constructor(value) {
    this.value = value;
    this.flipped = false;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addCard(value) {
    const newCard = new Card(value);
    if (!this.head) {
      this.head = newCard;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newCard;
    }
  }

  flipCard(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        current.flipped = true;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  checkMatch(value) {
    let current = this.head;
    while (current) {
      if (current.value === value && current.flipped) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const game = new LinkedList();
game.addCard("A");
game.addCard("B");
game.addCard("A");
game.addCard("B");

game.flipCard("A");
game.flipCard("B");

game.checkMatch("A");
