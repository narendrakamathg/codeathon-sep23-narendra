// BEGIN: 8f7d6e5a7b3c
const assert = require('assert');
const validateIPAddress = require('./program_3');

describe('validateIPAddress', () => {
  it('should return true for valid IP addresses', () => {
    assert.strictEqual(validateIPAddress('192.168.0.1'), true);
    assert.strictEqual(validateIPAddress('10.0.0.1'), true);
    assert.strictEqual(validateIPAddress('172.16.0.1'), true);
    assert.strictEqual(validateIPAddress('255.255.255.255'), true);
  });

  it('should return false for invalid IP addresses', () => {
    assert.strictEqual(validateIPAddress(''), false);
    assert.strictEqual(validateIPAddress('192.168.0'), false);
    assert.strictEqual(validateIPAddress('192.168.0.256'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.2'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.'), false);
    assert.strictEqual(validateIPAddress('192.168.0.01'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1 '), false);
    assert.strictEqual(validateIPAddress(' 192.168.0.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.-1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1.1.1.1.1'), false);
    assert.strictEqual(validateIPAddress('192.168.0.1.1.1.1.1.1.1.1.1.1.1.1.1'), false);
  });
});
// END: 8f7d6e5a7b3c