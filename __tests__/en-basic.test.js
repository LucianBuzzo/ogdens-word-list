const enBasic = require('../index');

describe('enBasic', () => {
  test('check returns non-basic words', () => {
    expect(enBasic.check('cat kubernetes dog')).toEqual(['kubernetes']);
  });

  test('highlight underlines non-basic words', () => {
    expect(enBasic.highlight('cat kubernetes dog')).toBe(
      'cat <span style="text-decoration: underline;">kubernetes</span> dog'
    );
  });

  test('check is case-insensitive for known basic words', () => {
    expect(enBasic.check('Cat DOG')).toEqual([]);
  });

  test('check handles empty input', () => {
    expect(enBasic.check('')).toEqual([]);
  });
});
