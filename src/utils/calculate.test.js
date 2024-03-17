import { describe, expect, it } from "vitest";
import { calculate } from "./calculate";

describe("calculate", () => {
  it("기본적인 연산이 제대로 작동하는가?", () => {
    expect(calculate(1, 2, "+")).toBe(3);
    expect(calculate(1, 2, "-")).toBe(-1);
    expect(calculate(1, 2, "X")).toBe(2);
    expect(calculate(1, 2, "/")).toBe(0);
  });

  it("결과가 Infinity인 경우, display value의 type이 number로 유지되도록 0이 되도록 한다", () => {
    expect(calculate(1, 0, "/")).toBe(0);
  });
});
