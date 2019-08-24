const calculator = document.querySelector('.main-calculator');
const keys = calculator.querySelector('.keys');
const display= document.querySelector('#screen');
const previousKeyType = calculator.dataset.previousKeyType

 
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key=e.target;
        const action = key.dataset.action;
        const keyContent=key.textContent;
        const displayedNum=display.textContent;

          //replace previous content with new content
        if ( (displayedNum==0 && !action))

        {
           
          display.textContent= keyContent; 
        }
        else  if (displayedNum!=0 && !action)  
        {
          display.textContent= displayedNum+keyContent;
     

        }

        if (!action) {
          if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
          } else {
            display.textContent = displayedNum + keyContent;
          }
        }

        //clear key
        if (action=='clear')
        {
          display.textContent= ' ';
        }
      
       
        if (action=='divide'|| action=='multiply'|| action=='add'|| action=='subtract'||  action=='modulus'  ) 
                {
          key.classList.add('is-depressed');
          display.textContent=' ';     
          Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
          calculator.dataset.previousKeyType = 'operator';
          calculator.dataset.firstValue = displayedNum;
          calculator.dataset.operator = action;
           
         
         


       }

       
       

      
      if  (action =='square'|| action=='square-root'|| action=='percentage'|| action=='toggle')
        {
          key.classList.add('is-depressed');
          display.textContent=' ';     
          Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
          calculator.dataset.previousKeyType = 'operator';
          calculator.dataset.firstValue = displayedNum;
          calculator.dataset.operator = action;
          
          
         
         
        }


        if (action==='calculate'&& (calculator.dataset.operator=='divide'||calculator.dataset.operator=='add'||
        calculator.dataset.operator=='multiply'||calculator.dataset.operator=='subtract'||calculator.dataset.operator=='modulus' )) 
                {
two_operands();
   
        }
        else if ( action=='calculate'&&( calculator.dataset.operator=='square-root'|| calculator.dataset.operator=='square'||  calculator.dataset.operator=='percentage'|| calculator.dataset.operator=='toggle' ))
        {
       one_operand();
        }

        //functions

        function two_operands()
    {
     
        
          const firstValue = calculator.dataset.firstValue;
          console.log(firstValue);
const operator = calculator.dataset.operator;
console.log(operator);
const secondValue = displayedNum;
document.querySelector("#screen").textContent= calculate(firstValue,operator,secondValue);

         
       
    }

    function  one_operand()
    {
       
        
        const operand =calculator.dataset.firstValue;
          const operator = calculator.dataset.operator;
          display.textContent= perform_operation (operand,operator);
 
  }
 
        
      }
    }
      
      );
          
 
         
   function calculate ( n1,operator,n2)

   {
   
     if (operator==='add')
     {
       return Number(n1)+Number(n2);
     }
     else if (operator==='subtract')
     {
       return Number(n1)-Number(n2);
     }
     else if (operator==='multiply')
     {
       return Number(n1)*Number(n2);
     }
     else if (operator==='divide')
     {
       return Number(n1)/Number(n2);
     }
     else if (operator=='modulus')
     {
       return Number(n1)%Number(n2);
     }
   };

   function perform_operation(operand,operator)
   {
     if (operator=='square')
     {
       return Number(operand)*Number(operand);
     }
     else if (operator=='square-root')
     {
       return Math.sqrt(Number(operand));
     }
     else if (operator=='percentage')
     {
       return Number(operand)/100;
     }
     else if (operator=='toggle')
     {
       return -1*(Number(operand)) ; 
     }
   } 

    