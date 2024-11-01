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
