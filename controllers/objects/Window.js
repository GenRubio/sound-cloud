const { BrowserWindow } = require("electron");

const Window = {
  init(data) {
    return this.makeWindow(data);
  },
  makeWindow(data) {
    return new BrowserWindow({
      autoHideMenuBar: data.resizable,
      width: data.width,
      height: data.height,
      icon: data.iconUrl,
      title: data.title,
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
      },
      show: false,
      frame: true,
      backgroundColor: data.backgroudColor,
      resizable: data.resizable,
    });
  },
};

module.exports = Window;
