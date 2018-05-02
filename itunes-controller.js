function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(results) {
    var songs = results
    var template = ""
    for (var i = 0; i < songs.length; i++) {
      var song = songs[i];
// Todo: Add link to price button to buy the song
      template += `
      <div class="row">
        <div class="col">
          <div class="card align-items-center card-bg">
          <img src="${song.albumArt}" alt="">
          <div class="card-body">
              <h3>Artist: ${song.artist}</h3>
              <h3>Song: ${song.title}</h3>
              <h3>Album: ${song.collection}</h3>
              <Button href="https://www.apple.com/itunes/music/">Price: ${song.price}</Button>
              <audio controls controlsList="nodownload">
                <source src="${song.preview}" type="audio/ogg">
                Your browser does not support the audio tag.
              </audio>
          </div>
        </div>
        </div>
      </div>
      `
    }
    document.getElementById("songs").innerHTML = template




  }

}
