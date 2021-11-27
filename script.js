// varfunction=getPizza(name,size,topping,crust,total); {
//  this.name=name;
//  this.size=size;
//  this.topping=topping;
//  This.crust=crust;
//  this.total=total;    

// }



function placeorder(){
    var p=newPrice();
    var amount=getElementbyId("amount").value;
    var flavour=getElementbyId("flavour").value;
    var size=getElementbyId("size").value;
    var crust=getElementbyId("crust").value;
    var topping=getElementbyId("topping").value;

     if(amount==""){
    prompt("enter amount")
      }
   else{
    p.setamount(amount);
      }
    if(flavour==""){
        prompt("enter flavour please.");
    }
    else{
        p.setflavour(flavour);
    }

    if (size=="") {
        prompt("enter size please.")
    }
    else{
        p.setsize(size);
    }
   
    if (crust=="") {
        prompt("enter your crust.")
    }
    else{
        p.setcrust(crust);
    }
    if (topping=="") {
        prompt("enter topping.")  
    }
    else{
        p.settopping(topping);
    }
}

function delivery(){
 var d=newDelivery();
  var name=getElementbyId("name").value;
  var phone=getElementbyId("phone").value;
  var location=getElementbyId("location").value;

if(name==""){
    prompt("enter your name.")
}

else{
    p.setname(name);
}

if(phone==""){
    prompt("enter your phone.")
}
else{
    p.setphone(phone);
}
if(location==""){
  prompt("enter your location")
}
else{
    p.setlocation(location);
    prompt("these is your location")
  }
}






    
