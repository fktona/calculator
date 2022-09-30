const keys = Array.from( document.querySelectorAll( '.function span'));
var input = document.querySelectorAll( 'input');
const numberkeys = keys.slice(2 , 16);
let x = '*' 
  numberkeys.forEach( numberkeys => {
      numberkeys.addEventListener ( 'click' , function (e) {
   input[0].value += e.target.dataset.num,
   input[3].style.color = 'red'
  }
  )}) ;
console.log(6+9)

  

  keys[18].onclick = (cal) => {
    if( input[0].value ===  '') {
      input[1].value = '';
    }
    else {
      input[1].value = eval(input[0].value);
    }
  }
  window.addEventListener ('dblclick' , () => {
    console.log('oka')
  })

  keys[0].onclick = () => {
    input[0].value = input[0].value.substr(0, input[0].value.length -1)
  } 
  keys[1].onclick = () => {
    input[0].value = '';
    input[1].value = '';
  }