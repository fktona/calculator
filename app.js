 var uyu = document.querySelectorAll( '.function button')
var keys = Array.from( document.querySelectorAll( '.function button'));
var input = document.querySelectorAll( 'input');
const numberkeys = keys.slice(2 , 16);
let numberk = keys.slice(2 , 16);




  numberkeys.forEach( numberkeys => { 
      numberkeys.addEventListener ( 'click' , function  (e) {
   input[0].value += e.target.dataset.num;
  
  } )}) ;
  
  
    keys.forEach(keys => {
      keys.addEventListener ('click' , () => { 
          keys.style.boxShadow = '2px 2px 10px #ac29ac80 ' ,
          '-3px -3px 10px #ac29ac80' , '-3px -3px 10px #ac29ac80 ' 
         , '2px 2px 10px #ac29ac80';
         keys.style.transform = 'scale(0.85)'
         
setTimeout(() => {

  keys.style.boxShadow = '3px 3px 10px #e0e0e0 ' ,
  '-3px -3px 10px #fff' , '-3px -3px 10px #e0e0e0 ' 
 , '3px 3px 10px #fff';
 keys.style.transform = 'scale(1)'
  
}, 500);
        
      } ) 
    });

  keys[18].onclick = () => {
    if( input[0].value ===  '') {
      input[1].value = '';
    }
    else {
      input[1].value = eval(input[0].value);
      
    }
  }

  keys[1].onclick = () => {
    input[0].value = '';
    input[1].value = '';

  }
/*  for (let i = 0; i < keys.length; i++) {
    let element1 = keys[i]

  element1.onclick = () => {
    
    keys[0].onclick = () => {
      input[0].value = input[0].value.substr(0, input[0].value.length -1)
  
    } 
    

    let values = input[0].value.length;
    for (let i = 0 ; i < numberk.length; i++) {

      keys[0].onclick = (e) => {
        input[0].value = input[0].value.substr(0, input[0].value.length -1)
    
      } 
      
      
     const element = numberk[i];
     console.log(values)
     if (values > 8   ){
    element.disabled = true
    keys[7].style.color = 'blue'
   input[0].style.color = 'blue'
     }
     else {
       input[0].style.color = 'red'
     }
     
    }
  }
  
   }
 */
