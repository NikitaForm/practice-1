
export default function convertToRoman(n) {
    function convertOrder(m, oneSymbol, fiveSymbol, tenSymbol) {
        let mRom = "";
        switch (m) {
            case 1: mRom = oneSymbol;
                break;
            case 2: mRom = `${oneSymbol}${oneSymbol}`;
                break;
            case 3: mRom = `${oneSymbol}${oneSymbol}${oneSymbol}`;
                break;
            case 4: mRom = `${oneSymbol}${fiveSymbol}`;
                break;
            case 5: mRom = `${fiveSymbol}`;
                break;
            case 6: mRom = `${fiveSymbol}${oneSymbol}`;
                break;
            case 7: mRom = `${fiveSymbol}${oneSymbol}${oneSymbol}`;
                break;
            case 8: mRom = `${fiveSymbol}${oneSymbol}${oneSymbol}${oneSymbol}`;
                break;
            case 9: mRom = `${oneSymbol}${tenSymbol}`;
                break;
        }
        return mRom;
    }

    return convertOrder(Math.floor(n / 1000), "M", "P", "P") + convertOrder(Math.floor((n % 1000) / 100), "C", "D", "M") + convertOrder(Math.floor((n % 100) / 10), "X", "L", "C") + convertOrder(n % 10, "I", "V", "X");
}
