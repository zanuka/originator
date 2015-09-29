import {Originator} from '../src/index'
import test from 'blue-tape'

test('exports a class', t => {
  t.equal(typeof Originator, 'function');
  t.end();
});

test('throws if instantiated improperly', t => {
  t.throws(() => {
    Originator();
  });
  t.end();
});

test('does not throw if instantiated properly', t => {
  t.doesNotThrow(() => {
    new Originator();
  });
  t.end();
});