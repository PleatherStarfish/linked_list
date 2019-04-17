const { LinkedList, ListNode } = require("./list.js");


let list = new LinkedList();

list.addLast("one");
list.addLast("two");
list.addLast("three");
list.addLast("four");
list.addLast("five");
list.addLast("six");
list.addLast("seven");
list.addLast("eight");
list.addFirst("minus-one");

list.printList();