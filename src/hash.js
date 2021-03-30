const makeMap = require("./makeMap");

module.exports = value => {
    let val = `${value}`;
    const n = 10 - val.length;
    for (let i = 0; i < n; ++i)
        val = '0' + val;

    const map = makeMap();
    let result = '';
    for (const it of val) {
        result += map[it][Math.floor(Math.random() * 6)];
    }
    return result;
};