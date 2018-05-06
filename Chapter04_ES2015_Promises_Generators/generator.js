function* generator () {
  yield 'Hello'
  yield 'Word'
}
const hiGenerator = generator()
console.log('Generator', hiGenerator.next(), hiGenerator.next())
console.log('Generator after done true', hiGenerator.next())

function* passingValues () {
  const tellMe = yield null
  console.log(`Passing Values--->Hello ${tellMe}`)
}

const callPassingValues = passingValues();
callPassingValues.next()
callPassingValues.next('People')

const throughException= passingValues();
throughException.next();
//throughException.throw(new Error('Hello Error!'))

(function () {
    var x = "I will invoke myself!";      // I will invoke myself
})();
