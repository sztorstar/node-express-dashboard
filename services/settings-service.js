const fs = require('fs');
const path = require('path');
const settingsFilePath = path.join(__dirname, "json/settings.json");

function getSettings() {
  const settingsData = fs.readFileSync(settingsFilePath);
  return JSON.parse(settingsData)
}

function writeSettings(newSettings) {
  const settingsJSON = JSON.stringify(newSettings, null, 2);
  try{
    fs.writeFileSync(settingsFilePath, settingsJSON);
    return true;
  }catch(err){
    return false;
  }
}

function getDefaultDir() {
  const settings = getSettings();
  const { defaultDir } = settings;
  if(!defaultDir) return process.cwd();
}

function isValidDir(dirPath) {
  try{
    fs.readdirSync(dirPath);
    return true;
  }catch(err){
    return false;
  }
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};