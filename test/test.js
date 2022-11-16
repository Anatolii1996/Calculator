const { calc, add, subtract, multiply, divide } = require("../main");
const assert = require("assert");


it("проверяет сложение", () => {
    assert.equal(add(2, 8), 10);
})
it("проверяет вычитание", () => {
    assert.equal(subtract(8, 2), 6);
})
it("проверяет умножение", () => {
    assert.equal(multiply(2, 8), 16);
})
it("проверяет деление", () => {
    assert.equal(divide(8, 4), 2);
})

describe("calc", () => {
    it("проверяет калькуляцию", () => {
        assert.equal(calc({ arg1: 8, arg2: 4, action: "+" }), 12);
    })

    it("проверяет калькуляцию выч", () => {
        assert.equal(calc({ arg1: 8, arg2: 4, action: "-" }), 4);
    })
    it("проверяет калькуляцию дел", () => {
        assert.equal(calc({ arg1: 8, arg2: 4, action: "/" }), 2);
    })
    it("проверяет калькуляцию умнож", () => {
        assert.equal(calc({ arg1: 8, arg2: 4, action: "*" }), 32);
    })
})

