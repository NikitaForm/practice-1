
export default function merge(data) {
    const res = {};
    for (let i = 0; i < data.length; i++) {
        for (const prop of Object.keys(data[i])) {
            if (!(prop in res)) {
                res[prop] = [data[i][prop]];
            } else {
                res[prop].push(data[i][prop]);
            }
        }
    }
    return res;
}
