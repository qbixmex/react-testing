const addition = (a: number, b: number): number => {
  return (a ?? 0) + (b ?? 0);
};

const subtraction = (a: number, b: number): number => a - b;
const multiplication = (a: number, b: number): number => a * b;
const division = (a: number, b: number): number => a / b;

describe("Tests on math functions", () => {
  test("Should make an addition", () => {
    const result: number = addition(2, 4);
    expect(result).toBe(6);
  });
  test("Should make an subtraction operation", () => {
    const result: number = subtraction(12, 6);
    expect(result).toBe(6);
  });
  test("Should make an multiplication operation", () => {
    const result: number = multiplication(3, 2);
    expect(result).toBe(6);
  });
  test("Should make an division operation", () => {
    const result: number = division(12, 2);
    expect(result).toBe(6);
  });
});
