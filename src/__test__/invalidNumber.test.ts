import {isNumber} from "../isNumber";
describe("Invalid Number test", () => {
    test("asdf return false", () => {
        expect(isNumber("asd")).toBe(false);
    });
    test("a1234 return false", () => {
        expect(isNumber("a1234")).toBe(false);
    });
    test("1234a return false", () => {
        expect(isNumber("1234a")).toBe(false);
    });
    test("a1234a return false", () => {
        expect(isNumber("a1234a")).toBe(false);
    });
    test("a12a34a return false", () => {
        expect(isNumber("a12a34a")).toBe(false);
    });
    test("'.01' return false", () => {
        expect(isNumber(".01")).toBe(false);
    });
    test("'1.2.3' return false", () => {
        expect(isNumber("1.2.3")).toBe(false);
    });
});
