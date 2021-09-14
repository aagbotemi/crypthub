const fibonacci = require('./fibonacci');

test('sum of even number between 4 and 10 is 28', () => {
    expect(fibonacci(4, 10)).toBe(28);
});
test('sum of even number between 9 and 9 is 0', () => {
    expect(fibonacci(9, 9)).toBe(0);
});
test('sum of even number between 1 and 4000001 is 0', () => {
    expect(fibonacci(1, 4000001)).toBe('Number must not exceed four million');
});
