const { add } = require('./calculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
  });

  it('should return the sum of numbers separated by new lines', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
