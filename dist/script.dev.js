"use strict";

// $(document).ready(function(){
// var pizza=(flavour,size,crust,topping)
// this.flavour=flavour;
// this.size=size;
// this.crust=crust;
// this.topping=topping
// })
// functionp=newPizza();
// var pizzaflavour=$("select#flavour option:selected").val();
// var pizzasize=$("select#size option:selected").val();
// var pizzacrust=$("select#crust option:selected").val();
// var pizzatopping=$("select#topping option:selected").val();
//     function = new Pizza();
//         var pizza=(flavour,size,crust,topping)
//         this.flavour=flavour;
//         this.size=size;
//         this.crust=crust;
//         this.topping=topping
// })
// var pizzaNew = new Pizza(pizzaflavour,pizzaSize, pizzaCrust,pizzatopping, pizzaNumber)
//         var sizePrice = 0;
//         var toppingPrice = 0;
//         var crustPrice = 0;
// //flavour
//           if (pizzaNew.flavour=="chicken pizza") {
//             flavourPrice +=50;
//         }
//         else if(pizzaNew.flavour=="fruitypizza") {
//             flavourPrice +=50;
//         }
//         else if(pizzaNew.flavour=="marc&cheese"){
//             flavourPrice +=50;
//         }
//         else if(pizzaNew.flavour=="raspberry pizza"){
//             toppingPrice +=50;
//         }
//         //size
//            if(pizzaNew.size == "large"){
//             sizePrice +=1200;
//         }else if(pizzaNew.size == "Medium"){
//             sizePrice +=800;
//         }else if (pizzaNew.size == "small"){
//             sizePrice +=150;
//         }
// //topping
//         if (pizzaNew.topping=="pepperoni") {
//             toppingPrice +=150;
//         }
//         else if(pizzaNew.topping==mushroom){
//             toppingPrice +=100;
//         }
//         else if(pizzaNew.topping==onion){
//             toppingPrice +=50;
//         }
//         else if(pizzaNew.topping==freshgarlic){
//             toppingPrice +=50;
//         }
// //crust
//     if(pizzaNew.crust == "crispy"){
//             crustPrice += 100;
//         }else if(pizzaNew.crust == "stuffed"){
//             crustPrice += 80;
//         }else if(pizzaNew.crust == "gluten-free"){
//             crustPrice += 60;
//         }        
// //number 
//  var price = (flvourPrice+sizePrice + toppingPrice + crustPrice);
//         var pizzas = parseInt(pizzaNew.number);
//         var totalPrice = price * pizza;
//         $("#output").text(totalPrice);
$(document).ready(function () {
  $("button.btn").click(function (event) {
    event.preventDefault();
    var pizzaFlavour = $("select#flavour option:selected").val();
    var pizzaTopping = $("select#topping option:selected").val();
    var pizzaSize = $("select#size option:selected").val();
    var pizzaAmount = $("input#amount").val();
    var pizzaCrust = $("select#crust option:selected").val();

    function Pizza(size, topping, crust, flavour, amount) {
      this.size = size;
      this.topping = topping;
      this.crust = crust;
      this.flavour = flavour;
      this.amount = amount;
    }

    var pizzaNew = new Pizza(pizzaSize, pizzaTopping, pizzaCrust, pizzaFlavour, pizzaAmount);
    var sizePrice = 0;
    var toppingPrice = 0;
    var crustPrice = 0;
    var flavourPrice = 0;

    if (pizzaNew.size == "small 150") {
      sizePrice += 150;
    } else if (pizzaNew.size == "medium 800") {
      sizePrice += 800;
    } else if (pizzaNew.size == "large 1200") {
      sizePrice += 1200;
    }

    if (pizzaNew.topping == "pepperoni" || pizzaNew.topping == "mushroom") {
      toppingPrice += 100;
    } else if (pizzaNew.topping == "fresh garlic" || pizzaNew.topping == "onion") {
      toppingPrice += 50;
    }

    if (pizzaNew.crust == "crispy") {
      crustPrice += 80;
    } else if (pizzaNew.crust == "stuffed") {
      crustPrice += 75;
    } else if (pizzaNew.crust == "glutten-free") {
      crustPrice += 70;
    }

    if (pizzaNew.flavour == "Chicken pizza" || pizzaNew.flavour == "marc&cheese") {
      flavourPrice += 200;
    } else if (pizzaNew.flavour == "fruity pizza" || pizzaNew.flavour == "raspberry pizza") {
      flavourPrice += 100;
    }

    var price = sizePrice + toppingPrice + crustPrice + flavourPrice;
    var pizzas = parseInt(pizzaNew.amount);
    var totalPrice = price * pizzas;
    alert(totalPrice);
  });
});