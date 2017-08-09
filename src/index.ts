const re = /^-?[0-9]+$/;

export default function shortNumber(value: string|number) {
    value = value.toString();
    if (value.match(re)) {
        return value.toString();
    }else {
        return false;
    }

}
