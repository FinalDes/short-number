import {isNumber} from "./isNumber";
const unitList = ["萬", "億"];

export function shortNumber(value: string|number): string|boolean {
    let result: string|boolean = isNumber(value);
    if (result) {
        result = result.toString();
        let i: number = -1;
        for (const unit of unitList) {
            // console.log(result.match(/0000/), unit, i);
            if (result.match(/0000$/)) {
                result = result.replace(/0000$/, "");
                i++;
            }
        }
        result = result + (i >= 0 ? unitList[i] : "");
    }
    return result;
}
