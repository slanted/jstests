var runmodes = {
    DEV: {name:'Development', baseUrl:'https://dev.nuskin.com', isProduction: false},
    TEST: {name:'Test', baseUrl:'https://test.nuskin.com', isProduction: false},
    PROD: {name:'Production', baseUrl:'https://www.nuskin.com', isProduction: true}
}

function getConfiguration(options) {
    console.log("looking up configuration with options:",options);
}

function configurationManager(options) {
    return {
        getConfiguration: getConfiguration
    }
}

function init(options) {
    if (!options.runmode) {
        options.runmode = runmodes.TEST;
    }
    console.log("Initializing with:",options);
    var configManager = configurationManager(options);
    configManager.getConfiguration();
}

var nuskin = {
    init: init,
    runmodes: runmodes
}

nuskin.init({country:'US', language:'en'});

/*

// shopping
nuskin.shop.addToCart("01003610");
nuskin.shop.calculateOrder();
console.log("order total:"+nuskin.shop.order.getTotal());
nuskin.shop.createOrder();

nuskin.account.logout();

var newUser = {
    username:'emoore',
    password: 'abc123',
    firstName: 'Eric',
    lastName: 'Moore',
    age: 46,
    type: nuskin.account.DISTRIBUTOR
};

nuskin.account.validateNewUser(newUser);
nuskin.account.createNewUser(newUser);
*/
