
export default function sumDigits(n) {
    // if (n === 0) {
    //     return 0;
    // } else {
    //     return n % 10 + sumDigits(Math.floor(n / 10));
    // }

    // second approach
    let level = 0;
    let result = 0;
    while (n > Math.pow(10, level)) {
        result = result + Math.floor(n / Math.pow(10, level)) - Math.floor(n / Math.pow(10, level + 1)) * 10;
        level += 1;
    }
    return result;
}
