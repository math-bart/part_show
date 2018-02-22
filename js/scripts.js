$(function() {
  var bg1 = 'url("images/background1.jpg")';
  var bg2 = 'url("images/background2.jpg")';
  var bg3 = 'url("images/background3.jpg")';
  var bg4 = 'url("images/background4.jpg")';
  var bg5 = 'url("images/background5.jpg")';
  var bg6 = 'url("images/background6.png")';
  var bg7 = 'url("images/background7.png")';
  var bg8 = 'url("images/background8.png")';
  var bg9 = 'url("images/background9.png")';
  var backgrounds = [bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9];
  var newPicture = document.getElementById('new');
  var ile = 48; 
  function doAll() {
	var elementy = $('.part');
	i = 0;
	displayPart();
    function displayPart() {
	  setTimeout(function () { 
	    var los = Math.round(Math.random()*(elementy.length-1));
        var element = elementy[los];
        elementy.eq(los).css('background', 'transparent');
        i++;   
        elementy.splice(los, 1);	
        if (i < ile) {            
          displayPart();             
        } 
      }, 500)
    }
    console.log(elementy);
  }
  newPicture.addEventListener('click', function() {
	  var elementy = $('.part').css('background', '#000');
	  var los = Math.round(Math.random()*(backgrounds.length-1));
	  var newBackground = $('#board');
	  var bgUrl = backgrounds[los];
	  newBackground.css('background-image', bgUrl);
	  backgrounds.splice(los, 1);
	  doAll();	 
  });
  doAll();
});
