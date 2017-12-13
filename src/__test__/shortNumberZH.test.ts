import {shortNumber} from "./../shortNumberZh";

describe("short Number ZH", () => {
    test("100 is 100", () => {
        expect(shortNumber(100)).toBe("100");
    });
    test("12000 is 12萬", () => {
        expect(shortNumber(120000)).toBe("12萬");
    });
    test("'12' is 12", () => {
        expect(shortNumber("12")).toBe("12");
    });
    test("'1200000' is 1200萬", () => {
        expect(shortNumber("12000000")).toBe("1200萬");
    });
    test("'120000000' is 12億", () => {
        expect(shortNumber("1200000000")).toBe("12億");
    });
});
