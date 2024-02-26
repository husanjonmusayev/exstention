var intervalId = null;
var maxTries = 10;
var tryCount = 0;

function checkForShortVideos() {
  var videos = document.querySelectorAll(
    "ytd-rich-grid-renderer ytd-rich-item-renderer"
  );

  videos.forEach(function (video) {
    var titleElement = video.querySelector("a#video-title");
    var videoTitle = titleElement ? titleElement.textContent.trim() : "";

    if (videoTitle.length < 10) {
      video.style.display = "none";
    }
  });
}

function startChecking() {
  checkForShortVideos();
  intervalId = setInterval(function () {
    tryCount++;
    checkForShortVideos();
    if (tryCount >= maxTries) {
      clearInterval(intervalId);
    }
  }, 1000);
}

window.addEventListener("load", startChecking);
