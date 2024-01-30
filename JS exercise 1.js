var divEL = document.querySelector('div');
var h1EL = document.querySelector('h1');

function RUNCOLOR() {
  let color= "#";
  color += Math.random().toString(16).slice(2,8);
divEL.style.backgroundColor = color;
h1EL.style.backgroundColor = color;
  console.log(color);

}
