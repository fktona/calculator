// declearing varaiables
let keys = Array.from( document.querySelectorAll( '.function button'));
let input = document.querySelectorAll( 'input');
let inputKeys = keys.slice(3 , 17);

// FUNCTION TO INPUT NUMBERS TO THE INPUT

 inputKeys.forEach( inputKeys => { 
     inputKeys.addEventListener ( 'click' , function  (e) {
   input[0].value += e.target.dataset.num;

  } )}) ;
  
  
      // CHANGING THE STYLE OF THE BUTTON

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

    // LIMITING LENGTH OF INPUT

  for (let i = 0  ; i < keys.length  ; i++) {
           let element1 = keys[i]
           
           
         element1.onclick = ()  => {
                       
          
          let values = input[0].value.length;
// condition to limit th input value

 if(values > 15){
 inputKeys.forEach(inputKeys => {
    input[0].style.fontSize = '38px'
   inputKeys.disabled = 'red'
    
  });
  
 }

 else{
  keys.forEach(inputKeys => {
    inputKeys.disabled = false
  });
  
 }

// function for edit button

 keys[0].onclick = () => {keys.forEach(element => {
  element.disabled = false
})
  input[0].value = input[0].value.substr(0, input[0].value.length -1);
  
} }
          
          }
          
// equa to
    
          keys[18].onclick = () => {
            if( input[0].value ===  '') {
              input[1].value = '';
            }
            else {
              input[1].value = eval(input[0].value);
              
            }
          }

          // clear
          
          keys[1].onclick = () => {
            input[0].value = '';
            input[1].value = '';
          }
          
          
