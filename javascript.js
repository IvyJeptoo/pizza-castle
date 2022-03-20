// contact us function
$(document).ready(function(){
    $(".myForm").submit(function(event){
        let userName = $("input#name").val();
        let userMail = $("input#email").val();
        let userMessage = $("label#message").val();
        if(userName && userMail && userMail !="") {
            alert(`Hello ${userName} We have received your message. Thank you.`)
        }
    })
})

// ordering constructor
class orderPizza {
    constructor(size, crust, topping, numberOfPizza, deliver) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};

// total price calculation
// size calculation
orderPizza.prototype.getSIzePrice = function(){
    if(this.size === "small") {
        return 500;
    } else if(this.size === "medium")  {
        return 800;
    } else if(this.size === "large") {
        return 1200;
    } else{return "pick your option"}        
    
}
// crust calculation
orderPizza.prototype.getCrust.Price = function () {
    if(this.crust === "custom") {
        return 250;
    } else if(this.crust === "thin"){
        return 100;
    } else if(this.crust === "thick"){
        return 150;
    } else if( this.crust === "flatbread") {
        return 250;
    }else {return "pick your option"}
}

// topping calculation


// function delivery(){
//     let location  = prompt("please enter your location")
//     // let deliveryType = document.forms["form"]["delivery"].value;
//    if(document.getElementById("flexRadioDefault1").checked){
//        alert(location)
//        return false
//    }else("working on your order")
// }
// delivery()
