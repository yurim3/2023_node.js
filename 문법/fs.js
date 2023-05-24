const fs = require('fs');
const path = require('path');

const removeConfidential = function(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(function(file, index) {
      const curPath = path.join(folderPath, file);
      const isDirectory = fs.lstatSync(curPath).isDirectory();
      if (isDirectory) {
        removeConfidential(curPath);
      } else {
        const fileName = path.basename(curPath);
        const newPath = path.join(path.dirname(curPath), fileName.replace('[기밀]', ''));
        if (fileName !== newPath) {
          fs.renameSync(curPath, newPath);
        }
      }
    });
  }
};

const folderPath = './';
removeConfidential(folderPath);