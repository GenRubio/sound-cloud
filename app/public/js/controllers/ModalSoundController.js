export const ModalSoundController = {
  init() {
    this.setListeners();
  },
  setListeners() {
    $(document).on("click", "#modal-sound-close", function (event) {
      ModalSoundController.closeModal(event);
    });
    $(document).on("submit", "#save-sound-form", function (event) {
      ModalSoundController.saveYoutubeAudio(event);
    });
  },
  saveYoutubeAudio(event) {
    event.preventDefault();

    ipc.once("save-youtube-response", function (event, data) {
      ModalSoundController.sendAlertSaveSound(data);
      ModalSoundController.reloadSoundTrack(data);
      ModalSoundController.enableSaveSoundButton();
      ModalSoundController.resetForm();
    });
    this.disableSaveSoundButton();

    const url = $("#youtube-url").val();
    ipc.send("save-youtube", url);
  },
  resetForm() {
    $("#save-sound-form")[0].reset();
  },
  reloadSoundTrack(success) {
    if (success) {
      $("#add-sound-modal").modal("hide");
      
      setTimeout(function () {
        Render.loadComponent("partial", "soundList");
      }, 1000);
    }
  },
  sendAlertSaveSound(success) {
    if (success) {
      toastr.success("La cancion se ha añadido correctamente.");
    } else {
      toastr.error("Esta cancion ya esta en la lista.");
    }
  },
  enableSaveSoundButton() {
    $("#modal-sound-create").text("Save audio");
    $("#modal-sound-create").prop("disabled", false);
  },
  disableSaveSoundButton() {
    $("#modal-sound-create").text("Download...");
    $("#modal-sound-create").prop("disabled", true);
  },
  closeModal(event) {
    event.preventDefault();
    $("#add-sound-modal").modal("hide");
  },
};
