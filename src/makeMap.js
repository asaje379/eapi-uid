const fs = require('fs');
const path = require('path');

module.exports = () => {
    const map_path = path.join(__dirname, 'map.txt');

    // Check if a map already exists
    try {
        const data = fs.readFileSync(map_path, 'utf-8');
        // Return readed data
        return JSON.parse(data);
    } catch (e) {
        // Creating available characters
        let _av = 'abcdefghijklmnopqrstuvwxyz';
        _av += _av.toUpperCase() + '0123456789';
        _av = _av.split('');

        // Making mapping
        const map = {};
        for (let i = 0; i < 10; ++i) {
            map[i] = [];
            for (let j = 0; j < 6; ++j) {
                const takenIndex = Math.floor(Math.random() * _av.length);
                map[i].push(_av[takenIndex]);
                _av.splice(takenIndex, 1);
            }
        }

        // Saving the map
        fs.writeFileSync(path.join(__dirname, 'map.txt'), JSON.stringify(map));
        return map;
    }
}