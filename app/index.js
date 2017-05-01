import 'whatwg-fetch';

const portfolioItems = [{
  photo: "https://media1.giphy.com/media/m7BTtLWhjkEJa/200_s.gif",
  text: "here's the thing"
}, {
  photo: "https://www.destructoid.com//ul/428292-grumpycat.jpg",
  text: "here's the thing"
}, {
  photo: "https://lh3.googleusercontent.com/U4IsC9Ri4KTmf-eCW-C0G6o06bULQ3zNSgPH8EbWbPBxr-rN_JE0rY3v0f6WSPFw3eU=w300",
  text: "here's the thing"
}, {
  photo: "https://rlv.zcache.com/svc/getimage?id=4b90b386-cb5f-4bd6-b68a-a930f7be270e&max_dim=324&square_it=true",
  text: "here's the thing"
}, {
  photo: "https://i0.wp.com/100happybirthdaymemes.com/wp-content/uploads/2016/06/Grumpy-Cat-Memes-01.jpg",
  text: "here's the thing"
}, {
  photo: "http://www.catster.com/wp-content/uploads/2015/08/grumpy-cat-meme-051.jpg",
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
    document.getElementById('photo').src = data.photo
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
