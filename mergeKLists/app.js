function sortList(lists) { // THis works, But is not a linked list
    let bigList = [];    
    for (let i = 0; i < lists.length; i++) {
        if (typeof(lists[i]) == 'object') {
            let currList = lists[i];
            for (let j = 0; j < currList.length; j++) {
                bigList.push(currList[j]);
            }
            continue
        }
        bigList.push(lists[i])
    }
    bigList.sort();
    const sortedLinked = linkedListMaker()
    for (let i = 0; i < bigList; i++) {
        sortedLinked.append(bigList[i]);
    }
    return sortedLinked.next;
}

function linkedListMaker() {
    let head = null;
    let length = 0;
    return {
        append
    };
    function append(element) {
        const node = {
            element,
            next: null,
        };
        if (head === null) {
            head = node
        } else {
            let currentNode = head;
  
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }
}

console.log(sortList([[1,4,5],[1,3,4],[2,6]]));
 