function mergeKLists(lists) {
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    let result = new ListNode(0);
    let curr = result;
    while(true){
        let min = Number.MAX_SAFE_INTEGER;
        console.log(Number.MAX_SAFE_INTEGER);
        let index = 0;
        for(let i = 0; i < lists.length; i++){
            if(lists[i] === null) continue;
            if(lists[i].val < min){
                min = lists[i].val;
                index = i;
            }
        }
        curr.next = new ListNode(min);
        curr = curr.next;
        lists[index] = lists[index].next;
        if(lists[index] === null) break;
    }
    return result.next;
}

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]), 'hawhjd');
console.log(Number.MAX_SAFE_INTEGER, 'he');