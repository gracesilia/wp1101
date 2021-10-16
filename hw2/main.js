const imagesURL = [["http://1.bp.blogspot.com/-Q1HHyxqpkSI/VEf3AZxniKI/AAAAAAAAALE/QXSYPrjzvn0/s1600/Wengen-Park.jpg",
    "https://i.pinimg.com/originals/01/ce/f4/01cef4a4def1dd93538cfee0544b76b8.jpg",
    "https://shorttermrentalz.com/wp-content/uploads/2019/05/iTrip-Vacations-Atlanta-added-to-iTrip-rental-portfolio.jpg",
    "https://i.pinimg.com/originals/24/bc/a0/24bca04533dbf3ff8f58aa012b9d85cf.jpg",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--tQfqcc-w--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/v6jqzmz74v12jorz54ol.jpg",
    "https://d32oejzeinee6f.cloudfront.net/wp-content/uploads/2019/03/SHS_273262172_Salzburg-1600x900.jpg?x40791"
],
["https://cdn.cnn.com/cnnnext/dam/assets/170606121356-taiwan---travel-destination---shutterstock-550368736.jpg",
"https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/08/05190112/Taiwan-article-scaled-1.jpeg",
"https://ak.picdn.net/shutterstock/videos/2674499/thumb/1.jpg",
"https://images.unsplash.com/photo-1571474004502-c1def214ac6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFpd2FufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
"https://windows10spotlight.com/wp-content/uploads/2019/04/72695546d3f93494d317912317180f0a.jpg",
"https://i.ytimg.com/vi/wQLCujzlLk0/maxresdefault.jpg"
]
];
const caption = [["Europe 2020: The Wood Village",
                "Europe 2020: Lake Terre", 
                "Europe 2020: London",
                "Europe 2020: The Waterfalls",
                "Europe 2020: Nature and sunrise",
                "Europe 2020: The Riverside"
],
["Taiwan 2021: Taipei Temple",
"Taiwan 2021: Taipei 101",
"Taiwan 2021: CKS Memorial Hall",
"Taiwan 2021: Jiufen Old Street",
"Taiwan 2021: Lotus Pond",
"Taiwan 2021: Rainbow Village"]];

var slideIndex = 1;
var indexAlbum = 0;
const imagesLength = imagesURL.length;
const tmpImg = new Image();
const albumPhoto1 = document.getElementById("album1");
const albumPhoto2 = document.getElementById("album2");
const albumPhoto3 = document.getElementById("album3");
const albumPhoto4 = document.getElementById("album4");
const albumPhoto5 = document.getElementById("album5");
const albumPhoto6 = document.getElementById("album6");
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");
const photo5 = document.getElementById("photo5");
const photo6 = document.getElementById("photo6");
showAlbumPhoto(indexAlbum);
showSlides(slideIndex);
function showAlbumPhoto(n){
  indexAlbum = n;

  var newImg1 = new Image;
  newImg1.onload = function() {
      albumPhoto1.src = this.src;
      photo1.src = this.src;
  }
  newImg1.src = imagesURL[indexAlbum][0];

  var newImg2 = new Image;
  newImg2.onload = function() {
      albumPhoto2.src = this.src;
      photo2.src = this.src;
  }
  newImg2.src = imagesURL[indexAlbum][1];

  var newImg3 = new Image;
  newImg3.onload = function() {
      albumPhoto3.src = this.src;
      photo3.src = this.src;
  }
  newImg3.src = imagesURL[indexAlbum][2];

  var newImg4 = new Image;
  newImg4.onload = function() {
      albumPhoto4.src = this.src;
      photo4.src = this.src;
  }
  newImg4.src = imagesURL[indexAlbum][3];

  var newImg5 = new Image;
  newImg5.onload = function() {
      albumPhoto5.src = this.src;
      photo5.src = this.src;
  }
  newImg5.src = imagesURL[indexAlbum][4];

  var newImg6 = new Image;
  newImg6.onload = function() {
      albumPhoto6.src = this.src;
      photo6.src = this.src;
  }
  newImg6.src = imagesURL[indexAlbum][5];

  showSlides(1)
}

function showAlert() {
  var myText = "Empty Album";
  alert (myText);
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = caption[indexAlbum][slideIndex-1];
}