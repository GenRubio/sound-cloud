const { app } = require("electron");
const url = require('url')
const Renders = require('./controllers/renders/Renders');
const MainWindow = require('./controllers/windows/MainWindowController');

if (require("electron-squirrel-startup")) {
  app.quit();
}
app.on("ready", () => {
  Renders.init();
  MainWindow.init();
});
