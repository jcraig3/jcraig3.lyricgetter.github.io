import "./styles.css";

const artistBox = document.querySelector("#artist");
const songBox = document.querySelector("#song");
const lyricSpan = document.querySelector("#lyrics");

async function getLyrics() {
  const artist = artistBox.value;
  const song = songBox.value;
  const response = await fetch(
    `https://api.lyrics.ovh/v1/${artist.toLowerCase()}/${song.toLowerCase()}`
  );
  const data = await response.json();
  const lyrics = data.lyrics;
  lyricSpan.textContent = lyrics;
}

document.getElementById("submit").addEventListener("click", getLyrics);

export default function App() {
  return (
    <body id="App">
      <h1 id="head">Lyric Getter</h1>
      <text id="instructions">Enter the name of an artist and song</text>
      <div>
        <img id="lyricIMG" src="lyricIMG.jpeg"></img>
      </div>
      <div id="entry">
        Artist: <input type="text" id="artist"></input>
        Song: <input type="text" id="song"></input>
        <input type="submit" value="Submit" id="submit"></input>
      </div>
      <span id="lyrics"></span>
    </body>
  );
}
