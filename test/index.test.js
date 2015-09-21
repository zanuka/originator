import {Freestyle} from '../src/index'
import test from 'tape'

test('should construct with two string arguments', function(assert) {
  const Freestyle = new Freestyle('thisName, thisType')
  const nameObj = Freestyle.nameObj
  const typeObj = Freestyle.typeObj 
  console.log(nameObj, typeObj)
  // assert.equal(nameObj, '')

})


// test('BLACK SNOW snowboard should carve ok', function(assert) {
//   var snowboard = new Snowboard('BLACK SNOW')
//   var result = snowboard.carve()
//   assert.equal(result, 'The BLACK SNOW snowboard carves well')
//   assert.end()
// })

// test('LIB TECH BIRDMAN should carve well', function(assert) {
//   var snowboard = new Snowboard('LIB TECH BIRDMAN')
//   var result = snowboard.carve()
//   assert.equal(result, 'The LIB TECH BIRDMAN snowboard carves well')
//   assert.end()
// })