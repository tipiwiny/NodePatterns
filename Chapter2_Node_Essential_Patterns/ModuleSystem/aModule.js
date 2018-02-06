const moduleA = (() => {
     const privateFoo = () => {console.log('privateFoo')};
     const privateBar = [];
     const exported = {
       publicFoo: () => {console.log('publicFoo')},
       publicBar: () => {console.log('publicBar')}
};
     return exported;})();
console.log(moduleA);
