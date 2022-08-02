const fs = require('fs');
const path = require('path');
const dir = process.cwd();

function getDirectoryContents(files, currentDir, query) {
    const data = [];
    files.forEach(file => {
        if(isDirectory(currentDir, file)){
            data.push({
                name: file,
                isDirectory: true,
                path: path.join(query, file)
            })
        }else{
            data.push({
                name: file,
                isDirectory: false,
                path: path.join(query, file),
                currentDir
            })
        }
    })
    return data
}

function isDirectory(currentDir, file) {
    const fileInfor = fs.statSync(path.join(currentDir, file));
    return fileInfor.isDirectory();
}

function readDir(currentDir, res, query) {
    fs.readdir(currentDir, (err, files) => {
        let directoryContents = [];
        if(!err){
            directoryContents = getDirectoryContents(files, currentDir, query);
        }
        res.json(directoryContents);
    })
}

exports.get = (req, res) => {
    // let currentDir = dir;
    // const query = req.query.path ? req.query.path : "";
    // console.log(query);
    // if(query){
    //     currentDir = fs.join(currentDir, query);
    // }
    // return readDir(currentDir, res, query);
    return ""
};
