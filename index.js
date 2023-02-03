const spide = require('rssspider');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const writeJSON = (filePath, result) => {
	const destPath = path.join(__dirname, filePath);
	fs.writeFileSync(destPath, JSON.stringify(result, null, 2));
};
const exists = (filePath) => {
	const destPath = path.join(__dirname, filePath);
	return fs.existsSync(destPath);
};

const getTodaysDate = () => {
	return moment().format('YYYY-MM-DD HH:mm:ss');
};


const url = 'http://rss.jrj.com.cn/finance/759.xml'
spide.fetchRss(url).then(function(data){
        console.log(data); // rss  post list
        // writeJSON('./temp.json', data);
        const today = getTodaysDate();
	   const jsonPath = `./data/${today}.json`;
	   writeJSON(jsonPath, data);
});