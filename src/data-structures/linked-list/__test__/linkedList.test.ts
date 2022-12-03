import {LinkedList} from "../linkedList";
import {LinkedListNode} from "../linkedListNode";

describe('LinkedList tests', () => {
    it('should prepend node to list', () => {
        const linkedList = new LinkedList();
        const linkedListNode1 = new LinkedListNode(10);
        const linkedListNode2 = new LinkedListNode(20, linkedListNode1);

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
        expect(linkedList.length).toEqual(0);

        linkedList.prepend(10);
        expect(linkedList.head).toEqual(linkedListNode1);
        expect(linkedList.tail).toEqual(linkedListNode1);
        expect(linkedList.length).toEqual(1);

        linkedList.prepend(20);
        expect(linkedList.head).toEqual(linkedListNode2);
        expect(linkedList.tail).toEqual(linkedListNode1);
        expect(linkedList.length).toEqual(2);
    });

    it('should append node to list', () => {
        const linkedList = new LinkedList();
        const linkedListNode1 = new LinkedListNode(10);
        const linkedListNode2 = new LinkedListNode(20);

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
        expect(linkedList.length).toEqual(0);

        linkedList.append(10);
        expect(linkedList.head).toEqual(linkedListNode1);
        expect(linkedList.tail).toEqual(linkedListNode1);
        expect(linkedList.length).toEqual(1);

        linkedList.append(20);
        expect(linkedList.tail).toEqual(linkedListNode2);
        expect(linkedList.length).toEqual(2);
    });

    it('should insert node to list', () => {
        const linkedList = new LinkedList();
        const linkedListNode1 = new LinkedListNode(10);

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
        expect(linkedList.length).toEqual(0);

        linkedList.insert(0, 10);
        expect(linkedList.head).toEqual(linkedListNode1);
        expect(linkedList.tail).toEqual(linkedListNode1);
        expect(linkedList.length).toEqual(1);

        linkedList.append(20);
        linkedList.append(30);
        expect(linkedList.getLength()).toEqual(3);
        expect(linkedList.toArray()).toEqual([10, 20, 30]);

        linkedList.insert(1, 15);
        expect(linkedList.getLength()).toEqual(4);
        expect(linkedList.toArray()).toEqual([10, 15, 20, 30]);

        linkedList.insert(10, 40);
        expect(linkedList.getLength()).toEqual(5);
        expect(linkedList.tail?.value).toEqual(40);
        expect(linkedList.toArray()).toEqual([10, 15, 20, 30, 40]);
    });

    it('should find by index in list', () => {
        const linkedList = new LinkedList();
        const linkedListNode2 = new LinkedListNode(20);
        const linkedListNode1 = new LinkedListNode(10, linkedListNode2);

        linkedList
            .append(10)
            .append(20);

        expect(linkedList.find(0)).toEqual(linkedListNode1);
        expect(linkedList.find(1)).toEqual(linkedListNode2);
        expect(linkedList.find(2)).toBeNull();
    });

    it('should remove by index in list', () => {
        const linkedList = new LinkedList();

        linkedList
            .append(10)
            .append(20)
            .append(30);

        expect(linkedList.getLength()).toEqual(3);
        expect(linkedList.toArray()).toEqual([10, 20, 30]);

        linkedList.remove(1);
        expect(linkedList.getLength()).toEqual(2);
        expect(linkedList.toArray()).toEqual([10, 30]);
        expect(linkedList.head?.value).toEqual(10);

        linkedList.remove(0);
        expect(linkedList.getLength()).toEqual(1);
        expect(linkedList.head?.value).toEqual(30);
    });

    it('should list be an array', () => {
        const linkedList = new LinkedList()
            .append(10)
            .append(20);

        expect(linkedList.toArray()).toEqual([10, 20]);
    });

    it('should list be string', () => {
        const linkedList = new LinkedList()
            .append(10)
            .append(20);

        expect(linkedList.toString()).toEqual('10,20');
    });

    it('should find length of list', () => {
        const linkedList = new LinkedList();

        expect(linkedList.getLength()).toEqual(0);

        linkedList
            .append(10)
            .append(20);

        expect(linkedList.getLength()).toEqual(2);
    });
});