const { app } = require("electron");
const url = require('url')
const Renders = require('./src/renders/Renders');
const MainWindow = require('./src/windows/MainWindowController');

if (require("electron-squirrel-startup")) {
  app.quit();
}
app.on("ready", () => {
  Renders.init();
  MainWindow.init();
});
