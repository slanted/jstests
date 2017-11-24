const tasks = [
    {description:'Buy Groceries', done:false},
    {description:'paint house', done:true},
    {description:'eat lunch', done:false},
    {description:'clean garage', done:false},
    {description:'clean bathroom', done:true}
];

const done = tasks.filter(task => task.done);

console.log("done:",done);
console.log("tasks:",tasks);