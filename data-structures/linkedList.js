// By default each new node will have a value and the previous and next will point to null.
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

// When the list will be created at the first time, the head and tail will be null (because there are no nodes yet) and the length will be set to 0 as well.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    // If there are no nodes yet in the list, meaning there's no head in the list yet, then we assign the new node to be the head and the tail
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // If there are nodes in the list, then we point the node.previous to the current tail and then we point the current.tail.next to the new node and finally we will point the current tail to the new node, so the new node will become the tail.
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    // If there are no nodes yet in the list, meaning there's no head in the list yet, then we assign the new node to be the head and the tail
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // If there are nodes in the list, then we point the node.next to the current head and then we point the current.head.previous to the new node and finally we will point the current head to the new node, so the new node will become the head.
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.length++;
  }

  insertAtIndex(value, index) {
    // If the index is a negative number or if it's smaller than the length of the list, then we don't do anything and return.
    if (index < 0 || index > this.length) {
      return;
    }
    // If the index is 0, then we just prepend the node at the front of the list.
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      // If the index is the same number as the length of the list, then we just append the node at the end of the list.
      this.append(value);
    } else {
      const node = new Node(value);
      // If the index is in between the first and last node, then we will mark the head as the current value and then we will walk in the list node by node until we reach the index point.
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      // Once we reached the index point, then we will add the new node between the current.previous and current.
      node.previous = current.previous;
      node.next = current;
      current.previous.next = node;
      current.previous = node;

      this.length++;
    }
  }

  removeFirst() {
    // If the list is empty then don't do anything and just return.
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      // If the length of the list is 1, then we set the head and the tail to null, removing the only nde in the list.
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      // If there are more nodes in the list, then we set the head to be the this.head.next and set the this.head.previous to be null.
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
    }
  }

  removeLast() {
    // If the list is empty then don't do anything and just return.
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      // If the length of the list is 1, then we set the head and the tail to null, removing the only nde in the list.
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      // If there are more nodes in the list, then we set the tail to be the this.tail.previous and set the this.tail.next to be null.
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
    }
  }

  removeAtIndex(index) {
    // If the index is a negative number then we don't do anything and return.
    if (index < 0) {
      return;
    }
    // If the index is 0 then we need to remove the first node.
    if (index === 0) {
      this.removeFirst();
    } else if (index >= this.length) {
      /* If the index is greater or equal than the length of the list,
       then we need to remove the last node. */
      this.removeLast();
    } else {
      /* If the index is in between the first and last node,
       then we will mark the head as the current value and
       then we will walk in the list node by node until we reach the index point. */
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }
      /* Once we reached the index point, 
      then we need to remove the current node by linking 
      the current.previous and current.next to each other, leaving the current node out. */
      current.previous.next = current.next;
      current.next.previous = current.previous;
      this.length--;
    }
  }

  getValueAtIndex(index) {
    // If the index is a negative number or if it's greater or equal than the length of the list, then we don't do anything and just return.
    if (index < 0 || index >= this.length) {
      return;
    }
    // We will mark the head as the current node and then we will walk through the list node by node until we reach the index point.
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }
    // Once we reached the index point, we just return the value of the node.
    return current.value;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(5); // null <=> 5 <=> null
doublyLinkedList.append(3); // null <=> 5 <=> 3 <=> null
doublyLinkedList.prepend(1); // null <=> 1 <=> 5 <=> 3 <=> null
doublyLinkedList.insertAtIndex(8, 2); // null <=> 1 <=> 5 <=> 8 <=> 3 <=> null
doublyLinkedList.removeFirst(); // null <=> 5 <=> 8 <=> 3 <=> null
doublyLinkedList.removeLast(); // null <=> 5 <=> 8 <=> null
doublyLinkedList.prepend(2); // null <=> 2 <=> 5 <=> 8 <=> null
doublyLinkedList.removeAtIndex(5); // null <=> 2 <=> 5 <=> null
doublyLinkedList.removeAtIndex(0); // null <=> 5 <=> null
doublyLinkedList.append(7); // null <=> 5 <=> 7 <=> null
doublyLinkedList.prepend(9); // null <=> 9 <=> 5 <=> 7 <=> null
doublyLinkedList.removeAtIndex(1); // null <=> 9 <=> 7 <=> null
doublyLinkedList.getValueAtIndex(1); // 7

console.log(doublyLinkedList);
