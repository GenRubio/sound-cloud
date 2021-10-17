export const SoundTrackController = {
  init() {
    this.setListeners();
  },
  setListeners() {
    $(document).on("click", ".component-sound", function (event) {
      SoundTrackController.setSoundHandler($(this));
    });
  },
  setSoundHandler(item) {
    this.setSoundImage(item);
    this.setSoundTitle(item);
    this.setSoundAudio(item);
    this.activeSoundContainer();
  },
  setSoundAudio(item) {
    $('.active-sound-audio-container').empty();
    let sound = item.data("url");
    $('.active-sound-audio-container').html(this.getAudioHtml(sound));
  },
  getAudioHtml(soundUrl){
      return `
      <audio controls>
        <source class="sound-src-js" src="` + soundUrl + `" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      `;
  },
  setSoundTitle(item) {
    let title = item.data("title");
    $(".active-sound-title").text(title);
  },
  setSoundImage(item) {
    let image = item.data("image");
    $(".sound-image-js").attr("src", image);
  },
  activeSoundContainer() {
    $(".active-sound").removeClass("d-none");
  },
};
