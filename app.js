var playlist = new Playlist();

var hereComesTheNightTime = new Song("Here Comes the Night Time", "Arcade Fire", "5.06");
var roar = new Song("Roar", "Katy Perry", "3.30");
var payphone = new Song("Payphone", "Maroon 5", "3.10");
var sunnyDay = new Song("Another Sunny Day", "Belle & Sebastian", "4.45");
var lifeOnMars = new Song("Life on Mars", "David Bowie", "3.56");

playlist.add(hereComesTheNightTime);
playlist.add(roar);
playlist.add(payphone);
playlist.add(sunnyDay);
playlist.add(lifeOnMars);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}