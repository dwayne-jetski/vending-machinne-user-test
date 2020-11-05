describe("vendingMachine", function(){

   beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
  

    //tests the calculateReturnChange on individual item prices
it("should calculate the proper return change for candyBar", function(){
   
    expect(vendingMachine.calculateReturnChange(vendingMachine.candyBars[0].price, vendingMachine.amountOfMoneyInChange)).toBe(4.25);
 });
 it("should calculate the proper return change for bagOfChips", function(){
    
     expect(vendingMachine.calculateReturnChange(vendingMachine.bagsOfChips[0].price, vendingMachine.amountOfMoneyInChange)).toBe(4.11);
  });
  it("should calculate the proper return change for packOfGum", function(){
    
     expect(vendingMachine.calculateReturnChange(vendingMachine.packsOfGum[0].price, vendingMachine.amountOfMoneyInChange)).toBe(4.85);
  });

  //removes items from inventory test
 it("Should remove Candy Bar from stock, taking it out of the array it's housed in", function(){

    let itemToRemove = vendingMachine.removeItemFromInventory(vendingMachine.candyBars[0].name);

    expect(itemToRemove).toEqual(new CandyBar('candy bar', .75));
 });
 it("Should remove Bag Of Chips from stock, taking it out of the array it's housed in", function(){

    let itemToRemove = vendingMachine.removeItemFromInventory(vendingMachine.bagsOfChips[0].name);
    expect(itemToRemove).toEqual(new BagOfChips('bag of chips', .89));
 });
 it("Should remove Pack Of Gum from stock, taking it out of the array it's housed in", function(){
    let itemToRemove = vendingMachine.removeItemFromInventory(vendingMachine.packsOfGum[0].name);
    expect(itemToRemove).toEqual(new PackOfGum('pack of gum', .15));
 });

 //add items back to stock
it("Should add Candy Bar back into inventory, adding it into the array. Checks that the array's length is one more than before entering.", function(){

    let itemToAdd = vendingMachine.candyBars[0];

    vendingMachine.addItemBackToInventory(itemToAdd)

    expect(vendingMachine.candyBars.length).toEqual(6);
 });
 it("Should add Bag of Chips back into inventory, adding it into the array. Checks that the array's length is one more than before entering.", function(){

    let itemToAdd = vendingMachine.bagsOfChips[0];

    vendingMachine.addItemBackToInventory(itemToAdd)

    expect(vendingMachine.bagsOfChips.length).toEqual(6);
 });
 it("Should add Pack of Gum back into inventory, adding it into the array. Checks that the array's length is one more than before entering.", function(){

    let itemToAdd = vendingMachine.packsOfGum[0];

    vendingMachine.addItemBackToInventory(itemToAdd)

    expect(vendingMachine.packsOfGum.length).toEqual(6);
 });


  //tests adding money into the vending machine
  it("should add moneyToAdd to amountOfMoneyInChange.", function(){
    vendingMachine.addMoneyToMachine(5)
    vendingMachineMoney = vendingMachine.amountOfMoneyInChange;
    expect(vendingMachineMoney).toBe(10);
});

//performTransaction() tests
   //check purchasing each item tests
it("Testing that an Candy Bar can be sucessfully purchased. Should return dispense item and money to return", function(){
   let returnInfo = vendingMachine.performTransaction('candy bar', 5)

   expect(returnInfo).toEqual({itemToDispense: new CandyBar('candy bar', .75), moneyToReturn:4.25 });
});
it("Testing that a Bag of Chips can be sucessfully purchased. Should return dispense item and money to return", function(){
   let returnInfo = vendingMachine.performTransaction('bag of chips', 5)

   expect(returnInfo).toEqual({itemToDispense: new BagOfChips('bag of chips', .89), moneyToReturn:4.11 });
});
it("Testing that a Pack of Gum can be sucessfully purchased. Should return dispense item and money to return", function(){
   let returnInfo = vendingMachine.performTransaction('pack of gum', 5)

   expect(returnInfo).toEqual({itemToDispense: new PackOfGum('pack of gum', .15), moneyToReturn:4.85 });
});

//that it will not allow you to buy something you don't have money for
it("Should not let the transaction to be completed if the amountOfMoneyInserted is less than price of candy bar", function(){

   let returnInfo = vendingMachine.performTransaction('candy bar', .50)

   expect(returnInfo).toEqual({itemToDispense: undefined, moneyToReturn: .50});

})

it("Should not let the transaction to be completed if the amountOfMoneyInserted is less than price of bag of chips", function(){

   let returnInfo = vendingMachine.performTransaction('bag of chips', .50)

   expect(returnInfo).toEqual({itemToDispense: undefined, moneyToReturn: .50});

})

it("Should not let the transaction to be completed if the amountOfMoneyInserted is less than price of pack of gum", function(){

   let returnInfo = vendingMachine.performTransaction('bag of chips', .10)

   expect(returnInfo).toEqual({itemToDispense: undefined, moneyToReturn: .10});

})


})