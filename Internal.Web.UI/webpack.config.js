/// <binding ProjectOpened='Watch - Development' />

"use strict";

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack.production.js');
}
else {    
    module.exports = require('./webpack.development.js');
}