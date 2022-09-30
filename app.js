const keys = Array.from( document.querySelectorAll( '.function span'));
var input = document.querySelectorAll( 'input');
const numberkeys = keys.slice(2 , 16);
let x = '*' 
  numberkeys.forEach( numberkeys => {
      numberkeys.addEventListener ( 'click' , function (e) {
   var value = input[0].value += e.target.dataset.num;
  }
  )}) ;

  keys[18].onclick = () => {
    input[1].value = eval(input[0].value)
  }
  keys[18].addEventListener ('dblclick' , () => {
    console.log('oka')
  })

  keys[0].onclick = () => {
    input[0].value = input[0].value.substr(0, input[0].value.length -1)
  } 
  keys[1].onclick = () => {
    input[0].value = '';
    input[1].value = '';
  }