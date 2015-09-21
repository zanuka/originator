import {Freestyle} from '../src/index'
import test from 'tape'

test('should return object when passed string', function(assert) {
  assert.plan(1)
  const freestyle = new Freestyle('thisName')
  const result = freestyle.nameObj.name
  console.log(freestyle.nameObj)
  // console.log('result', result)
  assert.equal(result, 'thisName')
  assert.end()
})
