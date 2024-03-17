export const calculate = (a, b, operator) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    X: (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const result = operations[operator](a, b);
  if (!isFinite(result)) {
    // 무한대 또는 계산 불가능한 결과인 경우 체크

    return 0; // 상태의 타입에 맞추기 위해 0을 반환
  }

  return Math.floor(result);
};
