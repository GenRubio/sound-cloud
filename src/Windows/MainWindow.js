const { globalShortcut } = require("electron");
const Window = require("../Models/Window");
const Helpers = require('../../helpers');

const MainWindow = {
  parameters: {
    title: "Sound Cloud",
    width: 982,
    height: 600,
    resizable: true,
    backgroudColor: "#ccc",
    iconUrl: Helpers.appPath() + "/icon.ico",
    fileUrl: Helpers.appPath() + "/app/views/layout/app.html",
  },
  init() {
    let window = Window.init(this.parameters);
    this.setWindowConfig(window);
    this.loadFileHandler(window);
    this.setlisteners(window);
    this.setWindowKeys(window);
  },
  setlisteners(window) {
    window.webContents.on("did-finish-load", () => {});
    window.on("closed", (event) => {});
    window.webContents.on("new-window", (event, url) => {
      event.preventDefault();
    });
  },
  setWindowKeys(window) {
    globalShortcut.register("f5", function () {
      window.reload();
    });

    globalShortcut.register("f1", function () {
      window.toggleDevTools();
    });
  },
  setWindowConfig(window) {
    window.setResizable(this.parameters.resizable);
    window.setMenu(null);
  },
  loadFileHandler(window) {
    window.loadFile(this.parameters.fileUrl);
    window.show();
  },
};

module.exports = MainWindow;
