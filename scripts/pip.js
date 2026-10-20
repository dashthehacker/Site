async function pipify() {
const stream = await navigator.mediaDevices.getDisplayMedia({
    video: { mediaSource: 'screen' }
});
const video = document.createElement('video');
const videoTrack = stream.getVideoTracks()[0];
video.srcObject = stream;
video.muted = true;
await video.play();
await video.requestPictureInPicture();
function cleanup() {
    video.disablePictureInPicture=true;
    video.remove();
    stream.getTracks()
    .forEach(track => track.stop())
}
videoTrack.addEventListener('ended', cleanup, { once: true });
stream.addEventListener('inactive', cleanup, { once: true });
video.addEventListener('leavepictureinpicture', (event) => {
    cleanup()
});
}
piplink = document.getElementById("pipifier")
piplink.addEventListener("click", pipify)

