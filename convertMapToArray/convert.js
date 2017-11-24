const runmodes = new Map();
runmodes.set('dev',{name:'development', baseUrl:'https://dev.nuskin.com',        runmode:'dev',   isProduction:false});
runmodes.set('test', {name: 'testing runmode', baseUrl: 'https://test.nuskin.com', runmode: 'test', isProduction: false});
runmodes.set('prod', {name:'production', baseUrl:'https://www.nuskin.com', runmode:'prod', isProduction:true});

// converting just the values, not the keys
var converted = Array.from(runmodes.values());

console.log("converted values:",converted);
console.log("converted keys:", Array.from(runmodes.keys()));

console.log("spread operator also works:",[...runmodes.values()]);