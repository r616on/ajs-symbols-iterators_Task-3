import iteratorCheck from '../iteratorCheck';

test('test object iter', () => {
  expect(iteratorCheck(new Map())).toBe(true);
});

test('test object iter arr', () => {
  expect(iteratorCheck([1, 2])).toBe(true);
});

test('test object NO-iter Obj', () => {
  expect(iteratorCheck(10)).toBe(false);
});
test('test object NO-iter', () => {
  expect(iteratorCheck({})).toBe(false);
});
test('test object NO-iter null', () => {
  expect(iteratorCheck(null)).toBe(false);
});
test('test object NO-iter NaN', () => {
  expect(iteratorCheck(NaN)).toBe(false);
});
