// 1. Show an alert box on click on a link.
function aBox(){
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
};
// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function clickMe(a,b){
     Swal.fire({
  title: a,
  text: b,
  icon: "success"
});
}

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
function bulbOn(e){
    e.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
function bulbOff(e){
    e.src ="https://www.w3schools.com/js/pic_bulboff.gif";

}