function totalBill(){
    var sub_tot = parseFloat(document.querySelector("#subtotal").value);
    var tip = parseFloat(document.querySelector("#tip").value);
    var tip_tot = sub_tot*(tip*0.01)
    var NT = sub_tot + tip_tot

    if(isNaN(sub_tot) && isNaN(tip)){
        document.querySelector("#NT").innerHTML = "Please enter valid numbers for the subtotal and tip!";
        return;
    }
    if(isNaN(sub_tot)){
        document.querySelector("#NT").innerHTML = "Please enter valid numbers for the subtotal!";
        return;
    }
    if(isNaN(tip)){
        document.querySelector("#NT").innerHTML = "Please enter valid numbers for the tip!";
        return;
    }

    if(tip % 1 === 0){
        var tip_tot = sub_tot*(tip*0.01)
    }
    else{
        var tip_tot = tip
    }
    document.querySelector("#NT").innerHTML = "Total bill including tip: $" + NT.toFixed(2);
}


function Reverse(){
    var input = document.querySelector("#UserInput");
    var str = input.value;
    var RS = "";
    for(var i = str.length -1; i >= 0; i--){
        RS += str[i];
    }
    document.querySelector("#NS").innerHTML = RS;
}

function palindrome(){
    var input = document.querySelector("#UserInput");
    var I = input.value;
    var RI = "";

    for(var i = I.length -1; i >= 0; i--){
        RI += I[i];
    }
    var Result;
    if( I === RI){
    Result = "This integer is a palindrome!";
    }
    else{
    Result = "This integer is not a palindrome.";
    }

    document.querySelector("#NI").innerHTML = Result;
}