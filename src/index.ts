import {isNumber} from "./isNumber";
export default function shortNumber(input: string|number) {
    const result: string|boolean = isNumber(input);
    return result;
}
