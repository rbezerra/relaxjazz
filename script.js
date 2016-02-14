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

