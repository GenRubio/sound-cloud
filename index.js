const { app } = require("electron");
const url = require('url')
const Renders = require('./src/Renders/Renders');
const MainWindow = require('./src/Windows/MainWindow');

if (require("electron-squirrel-startup")) {
  app.quit();
}
app.on("ready", () => {
  Renders.init();
  MainWindow.init();
});
