let $ = (jQuery = require("jquery"));
require('popper.js');
require('bootstrap');
require('@fortawesome/fontawesome-free/js/fontawesome.js');
window.toastr = require('toastr');
var ipc = require('electron').ipcRenderer;
const datepicker = require("js-datepicker");
const soundsJson = "../../database/sounds.json";
const Render = {
  loadComponent(folder, view) {
    const component = $("[data-" + folder + "='" + view + "']");
    const viewData = component.data(folder);
    switch (folder) {
      case "page":
        component.load(View.pages[viewData]);
        break;
      case "component":
        component.load(View.components[viewData]);
        break;
      case "partial":
        component.load(View.partials[viewData]);
        break;
    }
  },
};
