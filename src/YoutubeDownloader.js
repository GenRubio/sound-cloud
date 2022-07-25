const fs = require("fs");
const youtubeDownloader = require("ytdl-core");
const Helpers = require("../helpers");
let soundsJSON = Helpers.appPath() + "/app/database/sounds.json";

const YoutubeDownloader = {
  init(event, url) {
    this.downloadHandler(event, url);
  },
  downloadHandler(event, url) {
    if (!this.checkIfExistSound(url)) {
      let extension = ".mp3";
      let options = {
        //quality: "highestaudio",
        filter: "audioonly",
      };

      new Promise(async (resolve, reject) => {
        const metadata = await youtubeDownloader.getInfo(url);
        const title = YoutubeDownloader.makeSlugTitle(
          metadata.videoDetails.title
        );
        const youtube = youtubeDownloader.downloadFromInfo(metadata, options);

        youtube.on("error", () => {
          console.log("Ha ocurrido un error");
        });
        youtube.on("end", () => {
          let videoUrl = url;
          let soundUrl = "../../public/sounds/" + `${title}${extension}`;
          YoutubeDownloader.saveSoundData(
            metadata.videoDetails,
            videoUrl,
            soundUrl
          );
          event.reply("save-youtube-response", true);
        });
        youtube.pipe(
          fs.createWriteStream(
            Helpers.appPath() + "/app/public/sounds/" + `${title}${extension}`
          )
        );
      });
    } else {
      event.reply("save-youtube-response", false);
    }
  },
  checkIfExistSound(url) {
    let json = fs.readFileSync(soundsJSON, "utf-8");
    let sounds = JSON.parse(json);
    let urlYoutube = sounds.find((el) => el.url === url);
    if (urlYoutube) {
      return true;
    }
    return false;
  },
  makeSlugTitle(title) {
    return title
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  },
  saveSoundData(data, videoUrl, soundUrl) {
    let soundData = {
      title: data.title,
      description: data.description,
      image: data.thumbnails[4].url,
      saveUrl: soundUrl,
      url: videoUrl,
    };

    let json = fs.readFileSync(soundsJSON, "utf-8");
    let sounds = JSON.parse(json);
    sounds.push(soundData);
    json = JSON.stringify(sounds);
    fs.writeFileSync(soundsJSON, json, "utf-8");
  },
};

module.exports = YoutubeDownloader;
