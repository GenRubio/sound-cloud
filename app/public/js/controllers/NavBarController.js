export const NavBarController = {
  init() {
    this.setListeners();
  },
  setListeners() {
    $(document).on("click", "#add-sound-button", function (event) {
      NavBarController.addSoundHandler(event);
    });
    $(document).on("click", "#open-sound-folder", function (event) {
      NavBarController.openSoundFolderHandler(event);
    });
  },
  addSoundHandler(event) {
    event.preventDefault();
    $('#add-sound-modal').modal('show');
  },
  openSoundFolderHandler(event) {
    event.preventDefault(event);
    ipc.send('open-sound-folder');
  },
};
