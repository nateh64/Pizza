class pizza{
  //type constructor below
constructor (size, meatToppings,veggieToppings){
  this.size=size;
  this.meatToppings=meatToppings;
  this.veggieToppings;
}


  //type instance functions below
sizeCost(){
  else if (this.size =="s"){
  this.sizeCost=7.99;
  return this.sizeCost;
}
else if (this.size=="m") {
  this.sizeCost=9.99;
  return this.sizeCost;
}
else if (this.size=="l"){
  this.sizeCost=12.99;
  return this.sizeCost;
}
else if (this.sizeCost=="xl"){
  this.sizeCost=15.99;
  return this.sizeCost;
}

  //type class functions below
toppingCost(top){
  if(top == "veggie"){
    return this.veggieToppings.length*.50;
  }
  else if(top == "meat"){
    return this.meatToppings.length*.99;
  }
}


}

let mypizza = new Pizza("L",["peperoni"],["onion"]);
