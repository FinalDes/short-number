const re = /^-?[0-9]+(.[0-9]+)?$/;

export function isNumber(value: string|number): string|boolean {
    let result: string|boolean = false;
    if (typeof value === "number") {
        result = value.toString();
    } else if (value.match(re)) {
        result = value.toString();
        result = result.replace(/^0+/, "");
        result = result.replace(/^\./, "0.");
        if (value.match(/\.[1-9]+0+/)) {
            result = result.replace(/0+$/, "");
        }
    }
    return result;

}
