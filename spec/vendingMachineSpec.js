describe("vendingMachine", function(){

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
})