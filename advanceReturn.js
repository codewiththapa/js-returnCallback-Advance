/*   Research & insights of Advance 'return' & 'callbacks' functions   */

//example:1


/* NOTE: IF function will not  explict return anything then it will return undefined implicitly...now check the exmaple down below...  */

function hey(){

}
console.log(hey())  //here if we will print hey func. it will be undefined in output

//
function hey(){
  2+3
}
console.log(hey())   // still output will be undefined because we didnt return 2+3

//
function hey(){
  return 2+3
 }
 console.log(hey())    //now we return explictly so output 2+3=5 

//


const a = (x,y) =>{
  console.log (x*y)    //output : 100
 };
 
 const c = (cb,a,b) => {
  console.log (cb(a,b))   //output: undefined
 }
console.log(c(a,10,10)); //output: undefined


//example:2

 function a (){
 
  console.log ('hi')    // output: hi
  }
  let b = a('hello')
  console.log(b)      // output : undefined
  
  console.log(a)      // output : function a() { console.log ('hi') }

//example:3

  function x(a,b){
    console.log(a+b)    //output : 32
    return a-b
   }
   console.log(x(20,12))    //output : 8


//

   function calculate(operation,a,b){
    console.log(operation(a,b))       //output:22
 }
 
 function add(num1,num2){
  console.log(num1+num2)       //output: undefined
 }
 
 calculate(add,12,10)
 
 //
 
 function calculate1(operation,a,b){
    console.log(operation(a,b))       //output:110
 }
 
 function add1(num1,num2){
 return (num1+num2)       
 }
 
 calculate1(add1,100,10)
 
 
 //
 function calculate3(operation,a,b){
    return operation(a,b) 
 }
 
 function add3(num1,num2){
 console.log(num1+num2)       //output: 11
 }
 
 calculate3(add3,1,10)


 //

 const val1 = 12; const val2 = 30;

 function compare () {
 
 if(val1 >= val2){
  return 'hello there'
 } else if ( 12 === 30){
  return 'how are you';
 } else{
   return 'hello dear'
 }
 
 }
 console.log(compare());    // output : hello dear

 //

 function dispalySum (output) {
   console.log(output);
}

function sumIs(cb,x,y) {
 const nowSum = x+y;
 cb(nowSum);
}

sumIs(dispalySum,20,30)   //output : 50

//

function calculateIs (cb,x,y) {

   return cb(x,y)        
  }                               
 
 function theOutput (a,b) {   
   console.log( (a+b));          //24
 }
 console.log(calculateIs(theOutput,12,12));   //undefined   
 
 //
 
 function calculat1 (cb,x,y) {
   console.log (cb(x,y))        
  };
 
 function theOut1 (a,b) {   
   return (a+b);            
 }
 console.log(calculat1(theOut1,100,10));   //110
 
 //
 
 function main (cb,x,y) {
    cb(x,y)        
  }                               
 function second (a,b) {   
    console.log (a+b);     //sumandubai     
 }
 console.log(main(second,'suman','dubai'));   //undefined : because we cannot print double the same value.. for this func. its been already print in line no: 29 sumandubai
 
 //
 
 function calculat (cb,x,y) {
   return cb(x,y)    
  };
 
 function theOut (a,b) {   
   return (a+b);            
 }
 console.log(calculat(theOut,100,10.99));   //110.99
 
 //
 function cal (cb,x,y) {
  console.log (cb())        //line 46: output :suman thapa magar
  console.log(x+y)       //line 47: output :5176
   };
 
 function Out () {   
   return 'suman thapa magar'       
 }
 cal(Out,100,5076);    //undefined


 //
 function x(y,c,d){
   y()                   //line 2: output: hi there
 console.log('hello')    // line 3:  output: hello
 return c+d              //line 4:  because of 'return' no output we cannot add c+d
 };
 
 x(y,1,2)
 
 function y(){
   console.log('hi there')
 }
 
 x(y,'suman','thapa')
 
//

function x(y,c,d){
   y()                    // output: hi there
 console.log('hello')     // output: hello
 console.log(c+d)         //  output: suman thapa
 return c+d               // because of 'return' no output we cannot add c+d
 };
 
 x(y,1,2)
 
 function y(){
   console.log('hi there')
 }
 
 x(y,'suman','thapa')

 
 //
  function square(x) {
  return ( x * x);
 }
 
 function sumOfSquares(a,b) {       
   return square(a) 
 }
 console.log(sumOfSquares(2,3));   //output : 4

 //
function square(x) {
  return ( x * x);     //return (x*x)  = 3*3 =9
 }
 
 function sumOfSquares(a,b) {       
   return square(b) 
 }
 console.log(sumOfSquares(2,3));   //output : 9
 

 //
 function square(x) {
  return ( x * x);     //return (x*x)  = 3*3 =9  =>square(b)
 }                     //return (x*x)  = 2*2 =4  =>square(a)
                       // total = square(a) + square(b) = 4+9 = 13 
 function sumOfSquares(a,b) {       
   return square(b) + square(b)
 }
 console.log(sumOfSquares(2,3));   //output : 13

 //

 function y(){
  console.log('hi there')
  console.log('hello') 
  console.log('i am enginner')
}

function x(callback,c,d){
  console.log('how are you') 
  callback()                    
console.log('hello')     
console.log(c+d)         
return c+d               // because of 'return' no output we cannot add c+d
};

x(y,1,2);


//

function password(a){

  if(a.length>8){
    return console.log(`you choose ${a}`);     //1st output: purpleRhino123
  }else{                                        
    return console.log('Not a enough letters') ;  // 2nd output : Not a enough letters
  }
    };
  
  password ('purpleRhino123');
  password('circle77');
