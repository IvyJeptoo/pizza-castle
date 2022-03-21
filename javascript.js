      
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
class Orderpizza {
    constructor(size, crust, topping, numberOfPizza,) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.numberOfPizza = numberOfPizza;
        
    }
};



//  user input
$(document).ready(function(){
    $(".form").submit(function (event){
        event.preventDefault();    
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = $("#topping option:selected").val();
        let numberOfPizza = parseInt($("#number").val());
        let userDelivery = $("#delivery").val();  
        let totalPrice  = 0;
        
    if(pizzaSize === "small") {
        totalPrice += 500;
    } else if(pizzaSize === "medium")  {
        totalPrice += 800;
    } else if(pizzaSize === "large") {
        totalPrice += 1200;
    } 
// crust calculation

    if(pizzaCrust === "custom") {
        totalPrice += 250;
    } else if(pizzaCrust === "thin"){
        totalPrice += 100;
    } else if(pizzaCrust === "thick"){
        totalPrice += 150;
    } else if(pizzaCrust === "flatbread") {
        totalPrice+= 250;
    }


// topping calculation
 
     if(pizzaTopping === "pineapple") {
         totalPrice += 150;
     }else if(pizzaTopping === "sweetcorn") {
         totalPrice += 150;
     } else if(pizzaTopping === "olives") {
         totalPrice += 150;
     } else if(pizzaTopping === "macon") {
         totalPrice += 150;
     } else if(pizzaTopping === "mince") {
         totalPrice += 150;
     } else if(pizzaTopping === "chicken") {
         totalPrice += 200;
     } else if(pizzaTopping === "beef") {
         totalPrice += 200;
     } else if(pizzaTopping === "tomato") {
         totalPrice += 80;
     }else if(pizzaTopping === "onions") {
         totalPrice += 80;
     }else if(pizzaTopping === "mushrooms") {
         totalPrice += 80;
     }else if(pizzaTopping === "greenpepper") {
         totalPrice += 80;
     }   

     let grandtotal = totalPrice * numberOfPizza
     let deliveryTotal = grandtotal + 200;
     if(userDelivery !=""){
         alert(`Hi, you have ordered ${numberOfPizza} ${pizzaSize} pizza with ${pizzaCrust} crust and ${pizzaTopping} topping,your total bill will be ${deliveryTotal} and will be delivered to ${userDelivery} in 45 minutes. Thank you.`)
     }else{
     alert(`Hi, you have ordered ${numberOfPizza} ${pizzaSize} pizza with ${pizzaCrust} crust and ${pizzaTopping} topping,your total bill will be ${grandtotal} and will be ready in 25 minutes. Thank you.`)

     }

    })
})


