"use strict";

class listNode {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    get length() {
        return this.count;      // Returns length of linked list
    }

    get isEmpty() {
        return this.size === 0; // Returns a boolean in answer to query
    }

    printList() {
        let current = this.head;
        while (current.next) {
            console.log(current);
            current = current.next;
        }
    }

    addFirst(data) {
        const node = new listNode(data); // Create new node
        if (this.head === null) {
            this.head = node;         // If the list is headless, make new node the head
        }
        else {
            let current = this.head;
            this.head = node;
            this.head.next = current;
        }
        this.count++;
    }

    addLast(data) {
        let node = new listNode(data);    // Create a new node
        if (this.head === null) {
            this.head = node;         // If the list is headless, make new node the head
        }
        else {
            let current = this.head;
            while (current.next) { current = current.next; } // Otherwise iterate to end of list and add node
            current.next = node;
        }
        this.count++;
    }
}

module.exports = {
    LinkedList,
    listNode
}