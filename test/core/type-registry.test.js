import chai from 'chai';
const should = chai.should();

import {
  register,
  resolve
} from '../../lib/core/type-registry';

import Type from '../../lib/core/type';

describe('type-registry', function() {
  it('should exist', function() {
    should.exist(register);
    should.exist(resolve);
  });

  it('should register and resolve types correctly', function() {
    should.not.exist(resolve('foo.bar'));
    const type = new Type({
      namespace: 'foo',
      name: 'bar'
    });
    should.exist(resolve('foo.bar'));
    resolve('foo.bar').should.equal(type);
  });
});
