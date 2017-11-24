function* idMaker() {
    var index = 1;
    while(true) {
        yield index++;
    }
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* lister() {
    var index = 0;
    var list = ['one', 'two', 'three'];
    while (true) {
        if (index == list.length) {
            index = 0;
        }
        yield list[index++];
    }
}

var list = lister();

console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);