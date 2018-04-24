
export default function getStats(data) {
    if (!data || !data.length) {
        return {
            min: null,
            max: null,
            avg: null
        };
    }
    let min, max;
    let sum = 0;
    min = data[0];
    max = data[0];
    for (const item of data) {
        min = Math.min(item, min);
        max = Math.max(item, max);
        sum += item;
    }
    return {
        min: min,
        max: max,
        avg: sum / data.length
    };
}
