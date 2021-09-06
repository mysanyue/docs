function baseClone(base) {
  return base.valueOf();
}

//Number 
var num = new Number(1);
var newNum = baseClone(num); //newNum->1 

//String
var str = new String('hello');
var newStr = baseClone(str); // newStr->"hello" 
//Boolean 
var bol = new Boolean(true);
var newBol = baseClone(bol); //newBol-> true
