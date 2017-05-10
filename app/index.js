import 'whatwg-fetch';

const portfolioItems = [{
  photos: [
    '/img/heisenberg-login.png', '/img/heisenberg-main.png'
  ],
  text: "here's the thing"
}, {
  photos: [
    '/img/puppies1.png', '/img/puppies2.png', '/img/puppies3.png'
  ],
  text: "here's the thing"
}, {
  photos: [
    '/img/teeshirts1.png', '/img/teeshirts2.png', '/img/teeshirts3.png'
  ],
  text: "here's the thing"
}, {
  photos: [
    '/img/twitch.png'
  ],
  text: "here's the thing"
}, {
  photos: [
    '/img/razercars1.png', '/img/razercars2.png', '/img/razercars3.png', '/img/razercars4.png', '/img/razercars5.png',
  ],
  text: "here's the thing"
}, {
  photos: ["http://www.catster.com/wp-content/uploads/2015/08/grumpy-cat-meme-051.jpg"],
  text: "here's the thing"
}];

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
Array.from(btns).forEach((btn, index) => {
  btn.onclick = function() {
    modal.style.display = "block";
    const data = portfolioItems[index]
    const photoContainer = document.getElementById('photos')

    photoContainer.innerHTML = ""
    data.photos.forEach((photo) => {
      const img = new Image()
      img.src = photo
      photoContainer.append(img)
    });
    document.getElementById('text').innerHTML = data.text
  }

});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
