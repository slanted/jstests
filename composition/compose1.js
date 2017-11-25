function environment(name) {

    const environments = new Map();
    environments.add('dev', {name:'Development', baseUrl:'https://dev.nuskin.com', isProd: false});
    environments.add('test', {name:'Test', baseUrl:'https://test.nuskin.com', isProd: false});
    environments.add('prod', {name:'Production', baseUrl:'https://www.nuskin.com', isProd: true});

    if (name == 'dev') {

    }

    return {

    }
}


function runmode(environment) {

    return {
        baseUrl: baseUrl,
        isProduction: isProduction
    }
}

function application()