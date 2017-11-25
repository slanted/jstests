
function person(name, age) {
    var public = {};

    public.name = name;
    public.age = age;
    public.getAge = function() {
        return age;
    }
    public.setAge = function(newAge) {
        age = newAge;
    }
    public.toString = function() {
        return "My name is:"+name+" and I am "+age+" years old";
    }
    return public;
}

var fred = person("Fred", 45);

var bob = person("Bob");

console.log(fred.toString());
console.log(bob.toString());
bob.age = 100;
bob.setAge(200);
console.log("Bob's age:",bob.age);
console.log("Bob's age:",bob.getAge());

function printPerson(person) {
    console.log("The person's name is "+person.name+" and their age is:"+person.age);
}

printPerson(bob);

printPerson({name:'Eric'});

const worker = (options) => {
    var place = "Provo";

    var obj = {
        place: place,
        speak: function() {
            console.log("I'm from "+place+", and my name is ", options.name);
        }
    }
    return Object.assign(obj, options);
}

var provoWorker = worker({name:'Nate'});

console.log(provoWorker);

provoWorker.speak();

function createRabbit() {
    var speed = 3;
    return {
        getSpeed: function() {
            return speed;
        }
    }
}

var rabbit = createRabbit();
console.log(rabbit.getSpeed());