/*
function runmodes() {
    const runmodes = [
        {name:'development', baseUrl:'https://dev.nuskin.com', runmode:'dev', isProduction:false},
        {name:'test', baseUrl:'https://test.nuskin.com', runmode:'test', isProduction: false},
        {name:'staging', baseUrl:'https://stage.nuskin.com', runmode:'stage', isProduction:false},
        {name:'production', baseUrl:'https://www.nuskin.com', runmode:'prod', isProduction:true}
    ];

    return {
        dev: runmodes.filter(runmode => runmode.runmode == 'dev')[0],
        test: runmodes.filter(runmode => runmode.runmode == 'test')[0],
        stage: runmodes.filter(runmode => runmode.runmode == 'stage')[0],
        production: runmodes.filter(runmode => runmode.runmode == 'prod')[0],
        nonProductionRunmodes: runmodes.filter(runmode => !runmode.isProduction)
    }
}

console.log("non prod runmodes:",runmodes().nonProductionRunmodes);

runmodes().test = {'stuff':'test'};

console.log("test:",runmodes().test);

function init(runmode) {
    console.log("initialized with runmode:",runmode);

    if (runmode.isProduction) {
        console.log("And its a production runmode");
    } else {
        console.log("Its not a production runmode");
    }
    console.log("Base url:",runmode.baseUrl);
}

init(runmodes().test);

*/
// vs a class

// class Runmodes {
//
//     constructor() {
//         this.test = {name:'test', baseUrl:'https://test.nuskin.com', runmode:'test', isProduction: false}
//     }
//
//     get test() {
//         return this.testRunmode;
//     }
//
//     set test(runmode) {
//         this.testRunmode = runmode;
//     }
// }
//
// var runmodes = new Runmodes();
//
// runmodes.test = {stuff:'some stuff'};
//
// console.log("es6 test:",runmodes.test);
//consoel.log("es6 test var:", runmodes.test);

/*
class Runmodes {
    constructor() {
        this.testRunmode = {name: 'test', baseUrl: 'https://test.nuskin.com', runmode: 'test', isProduction: false};
        this.devRunmode = {name:'development', baseUrl:'https://dev.nuskin.com', runmode:'dev', isProduction:false};

        this.runmodes = [
            {name:'development', baseUrl:'https://dev.nuskin.com',        runmode:'dev',   isProduction:false},
            {name: 'testing runmode', baseUrl: 'https://test.nuskin.com', runmode: 'test', isProduction: false},
            {name:'production', baseUrl:'https://www.nuskin.com', runmode:'prod', isProduction:true}
        ];
    }

    get dev() {
        return this.devRunmode;
    }

    get test() {
        return this.runmodes.filter(runmode => runmode.runmode == 'test');
    }

    set currentRunmode(currentRunmode) {
        this.current = currentRunmode;
    }

    get currentRunmode() {
        return this.current;
    }

    get nonProductionRunmodes() {
        return this.runmodes.filter(runmode => !runmode.isProduction);
    }

    get allrunmodes() {
        return this.runmodes;
    }
}

var runmodes = new Runmodes();
runmodes.current = runmodes.test;

var runmode = runmodes.currentRunmode;

console.log("dev runmode:", runmodes.dev);


console.log("nonprod:",runmodes.nonProductionRunmodes);

if (runmode.isProduction) {
    console.log("Its a production runmode!")
} else {
    console.log("Its not production");
}

console.log("all:",runmodes.allrunmodes);


console.log("current runmode:",runmode);
console.log("test runmode:",runmodes.test);

if (runmodes.test == runmodes.test.isProduction) {
    console.log("Its a production runmode");
} else {
    console.log("Its not production");
}
*/

function runmodes() {
    const runmodes = new Map();
    runmodes.set('dev',{name:'development', baseUrl:'https://dev.nuskin.com',        runmode:'dev',   isProduction:false});
    runmodes.set('test', {name: 'testing runmode', baseUrl: 'https://test.nuskin.com', runmode: 'test', isProduction: false});
    runmodes.set('prod', {name:'production', baseUrl:'https://www.nuskin.com', runmode:'prod', isProduction:true});

    /*
    const runmodes = [
        {name:'development', baseUrl:'https://dev.nuskin.com',        runmode:'dev',   isProduction:false},
        {name: 'testing runmode', baseUrl: 'https://test.nuskin.com', runmode: 'test', isProduction: false},
        {name:'production', baseUrl:'https://www.nuskin.com', runmode:'prod', isProduction:true}
    ];
    */

    var public = {
        dev: runmodes.get('dev'),
        test: runmodes.get('test'),
        prod: runmodes.get('prod'),
        all: runmodes,
        nonProduction: [...runmodes.values()].filter(runmode => !runmode.isProduction),
        get current() {
            return current;
        },
        set current(runmode) {
            current = runmode;
        }
    };

    return public;
}

var r = runmodes();

r.current = r.dev;

console.log("current:", r.current);
console.log("runmodes:",r.all);

console.log("current isProduction:",r.current.isProduction);

if (r.current.isProduction) {
    console.log("its prod");
} else {
    console.log("its not prod")
}

console.log("non production:", r.nonProduction);