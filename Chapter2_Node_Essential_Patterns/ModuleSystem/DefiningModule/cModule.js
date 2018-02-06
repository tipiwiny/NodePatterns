const bModule = require('./bModule');
/*
if you try run this , this function dont exist
bModule.log('Hello');*/
bModule.run('Hello');
bModule.run = () => console.log('Goodbye');
bModule.run('Where is Hello?')
