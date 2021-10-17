const Utils = require("../../utils/Utils");
const Helpers = require('../../helpers');
const ipc = require("electron").ipcMain;
const YoutubeDownloader = require('../YoutubeDownloader');

const MainWindowRender = {
  init() {
    this.setListeners();
  },
  setListeners() {
    ipc.on("open-sound-folder", function (event, data) {
      Utils.openFolder(Helpers.appPath() + '/app/public/sounds');
    });
    ipc.on("save-youtube", function (event, data) {
      YoutubeDownloader.init(event, data);
    });
  },
};

module.exports = MainWindowRender;
