import { NavBarController } from "./controllers/NavBarController.js";
import { HomePageController } from "./controllers/HomePageController.js";
import { ModalSoundController } from "./controllers/ModalSoundController.js";
import { SoundTrackController } from "./controllers/SoundTrackController.js";

document.addEventListener("DOMContentLoaded", () => {
  onDocumentReady();
});

function onDocumentReady() {
  initControllers();
}
function initControllers() {
  NavBarController.init();
  HomePageController.init();
  ModalSoundController.init();
  SoundTrackController.init();
}
