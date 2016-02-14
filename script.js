var fbb = document.getElementById('share-fb-button');
fbb.onclick = function(e){
  e.preventDefault();
  FB.ui({
    method: 'feed',
    name: 'Relax to the Jazz!!',
    link: 'http://rbezerra.github.io/relaxjazz/',
    picture: 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/saxophone.png',
    caption: 'Relax and listen to the jazz',
    description: 'Relax and listen to the jazz'
  });
}

var twb = document.getElementById('share-tw-button');

twb.onclick = function(e){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var width  = 575,
      height = 400,
      left   = (w  - width)  / 2,
      top    = (h - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
}

