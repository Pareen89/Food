var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;

function smoothScroll(elementID) {
  destination = document.getElementById(elementID).offsetTop;

  scroller = setTimeout(() => {
    smoothScroll(elementID);
  }, 1);

  marginY = marginY + speed;

  if (marginY >= destination) {
    clearTimeout(scroller);
  }

  window.scroll(0, marginY);
}
window.onscroll = function(){
    marginY = this.pageYOffset;
}

function toTop(){
    scroller = setTimeout(() => {
      toTop();
    }, 1);

    marginY = marginY - speed;

    if (marginY <= 0) {
      clearTimeout(scroller);
    }
    window.scroll(0,marginY);
}
