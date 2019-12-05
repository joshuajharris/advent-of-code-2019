import { calcFuel } from './day-1';

test('mass of 12 should be 2', () => {
  const actual = calcFuel(12);

  expect(actual).toBe(2);
});

test('mass of 14 should be 2', () => {
  const actual = calcFuel(14);

  expect(actual).toBe(2);
});

test('mass of 1969 should be 654', () => {
  const actual = calcFuel(1969);

  expect(actual).toBe(654);
});

test('mass of 100756 should be 33583', () => {
  const actual = calcFuel(100756);

  expect(actual).toBe(33583);
});

