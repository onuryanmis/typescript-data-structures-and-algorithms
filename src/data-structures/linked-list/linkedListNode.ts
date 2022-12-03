export class LinkedListNode {
    value: any;
    next: LinkedListNode | null;

    constructor(value: any, next: LinkedListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}