const { shell } = require("electron");
const Utils = {
  openFolder(path) {
    shell.openPath(path);
  },
  makePHPServer(data) {
    phpServer.createServer({
      port: data.port,
      hostname: data.host,
      base: data.publicFolder,
      keepalive: false,
      open: false,
      bin: data.phpPath,
      router: data.serverFile,
    });
  },
  phpServerUrl(data){
    return "http://" + data.host + ":" + data.port + "";
  }
};
module.exports = Utils;
