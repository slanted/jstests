// var list = document.getElementById('list');
//
// for (let i = 1; i <= 5; i++) {
//     let item = document.createElement('li');
//     item.appendChild(document.createTextNode('Item ' + i));
//
//     item.onclick = function(ev) {
//         console.log('Item ' + i + ' is clicked.');
//     };
//     list.appendChild(item);
// }

// to achieve the same effect with 'var'
// you have to create a different context
// using a closure to preserve the value
for (var i = 1; i <= 5; i++) {
    var item = "item";
    item+=('Item ' + i);


            console.log('Item ' + i + ' is clicked.');

}

{
    var myvar = "eric";
    console.log("stuff");
}



console.log(myvar);

// var str = "this is my string";
//
// for (s of str) {
//     console.log(s);
// }

let arr = ['eric', 'josh', 'todd'];

for (item of arr) {
    console.log(item);
}

hello: {
    console.log("In hello block");
}

var map = new Map();
var weakmap = new WeakMap();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    map.set(a, 1);
    weakmap.set(b, 2);
})()

console.log("map:",map);
console.log("weak map:",weakmap);
