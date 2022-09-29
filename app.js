const keys = Array.from( document.querySelectorAll( '.function span'));
var input = document.querySelectorAll( 'input');
const numberkeys = keys.slice(3 , 16);
  numberkeys.forEach( numberkeys => {
      numberkeys.addEventListener ( 'click' , function (e) {
   var value = input[0].value += e.target.dataset.num;
  }
  )}) ;

  keys[18].onclick = () => {
    input[1].value = eval(input[0].value)
  }