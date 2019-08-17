var runmodes = {
    DEV: {name:'Development', baseUrl:'https://dev.acme.com', isProduction: false},
    TEST: {name:'Test', baseUrl:'https://test.acme.com', isProduction: false},
    PROD: {name:'Production', baseUrl:'https://www.acme.com', isProduction: true}
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

var acme = {
    init: init,
    runmodes: runmodes
}

acme.init({country:'US', language:'en'});

/*

// shopping
acme.shop.addToCart("01003610");
acme.shop.calculateOrder();
console.log("order total:"+acme.shop.order.getTotal());
acme.shop.createOrder();

acme.account.logout();

var newUser = {
    firstName: 'Eric',
    lastName: 'Moore',
    age: 46,
    type: acme.account.DISTRIBUTOR
};

acme.account.validateNewUser(newUser);
acme.account.createNewUser(newUser);
*/
