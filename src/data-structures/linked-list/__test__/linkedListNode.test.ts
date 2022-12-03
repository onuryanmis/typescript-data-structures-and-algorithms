import {LinkedListNode} from "../linkedListNode";

describe('LinkedListNode tests', () => {
    it('should create linked list node', () => {
        const node = new LinkedListNode(2);

        expect(node.value).toBe(2);
        expect(node.next).toBeNull();
    });

    it('should linked nodes', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2, node1);

        expect(node1.value).toBe(1);
        expect(node1.next).toBeNull();
        expect(node2.value).toBe(2);
        expect(node2.next).toBe(node1);
    });
});