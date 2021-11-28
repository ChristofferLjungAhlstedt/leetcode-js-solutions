function sortList(lists) { // THis works, But is not a linked list
    let bigList = [];    
    for (let i = 0; i < lists.length; i++) {
        if (typeof(lists[i]) == 'number') {
            bigList.push(lists[i])
        }
        else if (typeof(lists[i]) == 'object') {
            let currList = lists[i];
            for (let j = 0; j < currList.length; j++) {
                bigList.push(currList[j]);
            }
        }
    }
    return bigList.sort();
}