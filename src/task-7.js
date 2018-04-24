
export default function unique(data) {
    // Change me!
    // let res = [];
    // if (data || data.length) {
    //     for (let item of data) {
    //         let duplicated = res.find(
    //             item2 => {
    //                 return item === item2;
    //             }
    //         );
    //         if (!duplicated) {
    //             res.push(item);
    //         }
    //     }
    // }
    // return res;
    return [...new Set(data)];
}
