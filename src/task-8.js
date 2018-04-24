
export default function getTopLetter(str) {
    const statMap = new Map();
    for (const code of str) {
        if (statMap.has(code)) {
            statMap.set(code, statMap.get(code) + 1);
        } else {
            statMap.set(code, 1);
        }
    }
    let result = "";
    let count = 0;
    statMap.forEach(
        (value, key) => {
            if (value > count) {
                count = value;
                result = key;
            }
        }
    );
    return result;
}
