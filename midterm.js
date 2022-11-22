class Album {
  constructor(album, artist, year, price) {
    this.album = album;
    this.artist = artist;
    this.year = year;
    this.price = price;
  }
  displayAlbumInfo() {
    var album_name = '<strong>Album Name: </strong>' + this.album + '<br>\n';
    var artist_name = '<strong>Artist Name: </strong>' + this.artist + '<br>\n';
    var release_year =
      '<strong>Release year Name: </strong>' + this.year + '<br>\n';
    var album_price =
      '<strong>Price of album: </strong>' + this.price + '<hr>\n';
    return album_name + artist_name + release_year + album_price;
  }
}
/* Class was arbitrarly picked, can change it to literally anything if you need to */
var albumArray = [];

albumArray[0] = new Album('Abbey Road', 'The Beatles', 1969, true);

albumArray[1] = new Album('Help!', 'The Beatles', 1965, false);

albumArray[2] = new Album(
  "Sgt. Pepper's Lonely Heart Club",
  'The Beatles',
  1967,
  true
);

albumArray[3] = new Album('The Beatles', 'The Beatles', 1968, true);

for (let album of albumArray) {
  document.write(album.displayAlbumInfo());
}

/* To grab input from the text text box for filtering the code looks like this

let search = document.querySelectorAll('input[type=text]')[0].value;

But we first need to get the buttons for filtering working. Here is something I have kinda have
need to flesh it out a little more to make it work.
*/
function sortOrFilter() {
  a = 1;
  if (a === 1) {
    alert('hello');
  }
}

// document.querySelector('html').addEventListener('click', e => {
//   console.log(e.composed);
//   console.log(e.composedPath());
// });
//     // something goes here
//     // let search = document.querySelectorAll('input[type=text]')[0].value; ?? maybe this??
//   }
// }
// //     document.querySelector('#result).innerHTML = htmlArray(albumArray)
// // }
// /*To clarify it, she wants us to make two methods the second being a partial return, so in the code I have 4 properties  in the method that get returned, the second method can be so it only returns 1 of the 4 properties
// */
// let sortedAlbum = albumArray.sort((a1, a2) => {
//   return a1.year - a2.year;
// });

// // let secondSortedAlbum = albumArray.sort((a1, a2) => {
// //   return a2.year - a1.year;
// // });
// // console.log(albumArray);
// // console.log(sortedAlbum);
// // console.log(secondSortedAlbum)
// console.log(albumArray);
// console.log(sortedAlbum);
// console.log(desending);
// console.log(sortedAlbum);
