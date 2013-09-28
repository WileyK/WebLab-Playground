

//Problem 4


var currency = function (number) {
var y=0;
var denominations = [
    {key: 'pennies: ', value:1},
    {key:'nickels: ', value:5},
    {key:'dimes: ', value:10},
    {key:'quarters: ',value:25},
    {key:'ones: ', value:100},
    {key:'fives: ',value:500},
    {key:'tens: ' ,value:1000},
    {key:'twenties: ', value:2000},
    {key:'fifties: ',value:5000},
    {key:'hundreds: ',value:10000}];  
    var finalnum = number.toString();
    //console.log(finalnum);
    for(var i=0; i<=finalnum.length-1; i++) {
        if(finalnum[i] ==='.'){
            finalnum= finalnum.split("");
            finalnum.splice(i,1); 
           // console.log(finalnum);
            if(finalnum[i] != null){
                finalnum = finalnum.slice(0,i+2);
           // console.log(finalnum)    
            }
         }//truncate extraneous digits
    }
  
    //if (typeof finalnum != 'string'); 
     
     if( Object.prototype.toString.call(finalnum ) === '[object Array]' )
        finalnum=finalnum.join(''); //if result is an array make it a string
   
var finale =[];    
 for (var x=denominations.length-1; x>=0; x--) {
 var denom = denominations[x];
     for(key in denom) {
         if(denom.hasOwnProperty(key))
             var val = denom[key];
     }
     
     var divided = Math.floor(finalnum / val);
     
     if (divided >= 1){
        finalnum -= divided * val;
        var tempmoney = {key:denom.key, value:divided}
        finale.push(tempmoney);
        
     }
     if (finalnum ==0)
         break;
 }
   
    return finale;
}
var amount = "356.82";
console.log("amount is: $" + amount + "<br>");console.log(JSON.stringify(currency(amount)));