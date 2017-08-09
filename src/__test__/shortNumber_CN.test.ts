import shortNumber from "../index";
describe("Short Number ZH", () => {
    test("100 return 100", () => {
        expect(shortNumber("100")).toBe("100");
    });
    test("100 return 100", () => {
        expect(shortNumber(100)).toBe("100");
    });
    test("-100 return false", () => {
        expect(shortNumber("-100")).toBe("-100");
    });
});
describe("Invalid Number test", () => {
    test("asdf return false", () => {
        expect(shortNumber("asd")).toBe(false);
    });
    test("a1234 return false", () => {
        expect(shortNumber("a1234")).toBe(false);
    });
    test("1234a return false", () => {
        expect(shortNumber("1234a")).toBe(false);
    });
    test("a1234a return false", () => {
        expect(shortNumber("a1234a")).toBe(false);
    });
    test("a12a34a return false", () => {
        expect(shortNumber("a12a34a")).toBe(false);
    });
});
