
export default function trim(text, maxLength) {
    if (!maxLength || maxLength < 0) {
        throw new RangeError();
    }

    if (text.length > maxLength) {
        text = `${text.substr(0, maxLength - 1)}\u2026`;
    }
    return text;
}
