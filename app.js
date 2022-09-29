const keys = Array.from( document.querySelectorAll( '.function span'));
const input = document.querySelectorAll( 'input');
const numberkeys = keys.slice(3 , 16);
  numberkeys.forEach( numberkeys => {
      numberkeys.addEventListener ( 'click' , function (e) {
   var value = input[1].value += e.target.dataset.num;
  }
  )}) 