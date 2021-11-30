"use strict";

$(document).ready(function () {
  $("button.btn").click(function (event) {
    event.preventDefault();
    var pizzaFlavour = $("select#flavour option:selected").val();
    var pizzaTopping = $("select#topping option:selected").val();
    var pizzaSize = $("select#size option:selected").val();
    var pizzaAmount = $("input#amount").val();
    var pizzaCrust = $("select#crust option:selected").val();
    var locationn = $("#location").val();

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

    if (locationn == "") {
      alert("enter location");
    } else {
      alert("your delivery will be sent to," + locationn);
    }

    var price = sizePrice + toppingPrice + crustPrice + flavourPrice;
    var pizzas = parseInt(pizzaNew.amount);
    var totalPrice = price * pizzas;
    alert(totalPrice);
  });
});