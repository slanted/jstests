const todo = new Map();

todo.set("stuff",{name:'stuff', done:false});
todo.set("stuff1",{name:'stuff1', done:false});
todo.set("stuff2",{name:'stuff2', done:true});
todo.set("stuff3",{name:'stuff3', done:false});
todo.set("stuff4",{name:'stuff4', done:true});

console.log("todo:",todo);
console.log("todo keys:", Array.from(todo.keys()));
console.log("todo values:", todo.values());
var arr = [...todo];

console.log("arr:",arr);
console.log("todo:", arr.length);

for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}