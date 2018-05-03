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
          <div class="row">
          <div class="col-sm-6">
          <img src="${song.albumArt}" alt="" class="albumart">
          </div>
          <div class="col-sm-6">
          <div class="card-body">
              <h3>Artist: ${song.artist}</h3>
              <h3>Song: ${song.title}</h3>
              <h3>Album: ${song.collection}</h3>
              <audio controls controlsList="nodownload">
              <source src="${song.preview}" type="audio/ogg">
              Your browser does not support the audio tag.
              </audio>
              <h3><a href="https://www.apple.com/itunes/music/" class="btn btn-primary"  target="_blank">Price: ${song.price}</a></h3>
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      `
    }
    document.getElementById("songs").innerHTML = template




  }

}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}