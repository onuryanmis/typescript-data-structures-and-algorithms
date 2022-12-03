import {LinkedListNode} from "./linkedListNode";

export class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;

    constructor() {
        /** @type {LinkedListNode}*/
        this.head = null;

        /** @type {LinkedListNode}*/
        this.tail = null;

        /** @type {number}*/
        this.length = 0;
    }

    /**
     * @param {*} value
     *
     * @return {LinkedList}
     */
    prepend(value: any): LinkedList {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    /**
     * @param {*} value
     *
     * @return {LinkedList}
     */
    append(value: any): LinkedList {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            return this.prepend(value);
        }

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        this.length++;

        return this;
    }

    /**
     * @param {number} index
     * @param {any} value
     *
     * @return {LinkedList}
     */
    insert(index: number, value: any): LinkedList {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const findPreviousElement = this.find(index - 1);

        if (findPreviousElement) {
            findPreviousElement.next = new LinkedListNode(value, findPreviousElement.next);
        }

        this.length++;

        return this;
    }

    /**
     * @param {number} index
     *
     * @return {LinkedListNode|null}
     */
    find(index: number): LinkedListNode | null {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            count++;
            if (currentNode) {
                currentNode = currentNode.next;
            }
        }

        return currentNode;
    }

    /**
     * @param {number} index
     *
     * @return {LinkedListNode|null}
     */
    remove(index: number): LinkedList {
        if (index === 0) {
            this.head = this.head?.next ? this.head.next : null;
        } else {
            const item = this.find(index - 1);

            if (item?.next) {
                item.next = item.next.next;
            }

            if (index >= this.length - 1) {
                this.tail = item;
            }
        }

        this.length--;

        return this;
    }

    /**
     * @return {*[]}
     */
    toArray(): any[] {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * @return {string}
     */
    toString(): string {
        return this.toArray().toString();
    }

    /**
     * @return {number}
     */
    getLength(): number {
        return this.length;
    }
}