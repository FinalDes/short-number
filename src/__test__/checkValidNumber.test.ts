import {isNumber} from "../index";
describe("valid Number", () => {
    test("'100' return 100", () => {
        expect(isNumber("100")).toBe("100");
    });
    test("100 return 100", () => {
        expect(isNumber(100)).toBe("100");
    });
    test("123 return 123", () => {
        expect(isNumber(123)).toBe("123");
    });
    test("100.123 return 100.123", () => {
        expect(isNumber("100.123")).toBe("100.123");
    });
    test("0000001234234 return 1234234", () => {
        expect(isNumber("0000001234234")).toBe("1234234");
    });
    test("00000012342340 return 12342340", () => {
        expect(isNumber("00000012342340")).toBe("12342340");
    });
    test("100.1230000 return 100.123", () => {
        expect(isNumber("100.12300")).toBe("100.123");
    });
    test("-100 return -100", () => {
        expect(isNumber("-100")).toBe("-100");
    });
    test("0.01 return 0.0.1", () => {
        expect(isNumber(0.01)).toBe("0.01");
    });
    test("'0.01' return 0.01", () => {
        expect(isNumber("0.01")).toBe("0.01");
    });
    test("'00.01' return 00.01", () => {
        expect(isNumber("00.01")).toBe("0.01");
    });
    test("-12341234 return -12341234", () => {
        expect(isNumber(-12341234)).toBe("-12341234");
    });
});
