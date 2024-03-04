const videoElement = document.getElementById('player');
const nextButton = document.getElementById('next-button');
const homeButton = document.getElementById('home-button');

const firstScreen = document.getElementById('first-screen');
const videoContainer = document.getElementById('video-container');

const videos = {
1: 'video/video-1.mp4',
  2: 'video/video-2.mp4',
  3: 'video/video-3.mp4',
  4: 'video/video-4.mp4',
  5: 'video/video-5.mp4',
};

const playVideo = (videoId) => {
  videoElement.src = videos[videoId];
  videoElement.play();
  videoContainer.style.display = 'block'; // Show video container on play
  firstScreen.style.display = 'none'; // Hide first screen on play
  nextButton.disabled = true;
};

const buttons = document.querySelectorAll('#first-screen button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;
    playVideo(videoId);
  });
});

videoElement.addEventListener('ended', () => {
  if (videoElement.currentSrc.includes('endingVideo')) {
    homeButton.style.display = 'block';
  } else {
    nextButton.disabled = false;
  }
});

nextButton.addEventListener('click', () => {
  playVideo('end');
});

homeButton.addEventListener('click', () => {
  videoElement.src = ''; // Clear video source
  nextButton.disabled = true;
  homeButton.style.display = 'none';
  videoContainer.style.display = 'none'; // Hide video container on home
  firstScreen.style.display = 'block'; // Show first screen on home
});
