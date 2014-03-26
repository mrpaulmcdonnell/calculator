describe("My Converter", function() {
    it("should convert first number and second number", function () {
        expect(Converter.AddTwoNumbers( 4, 6).toBe(10);
    })
     it("7 + string should be an error", function() {

        expect (function() {Converter.AddTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
    
     it("string + 5 should be an error", function() {

        expect (function() {Converter.AddTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
    
     it("string + string should be an error", function() {

        expect (function() {Converter.AddTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
})