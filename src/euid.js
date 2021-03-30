const fs = require('fs');
const path = require('path');
const hash = require('./hash');

module.exports = _ => {
    const id_path = path.join(__dirname, 'luid.txt');
    try {
        const luid = fs.readFileSync(id_path, 'utf-8');
        fs.writeFileSync(id_path, `${Number(luid) + 1}`);
        return hash(luid);
    } catch (e) {
        fs.writeFileSync(id_path, '2');
        return hash(1);
    }
};