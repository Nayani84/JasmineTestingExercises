describe('calculate monthly rate test', function () {

    it('should calculate the monthly rate correctly', function () {
        const values = { amount: 20000, years: 10, rate: 4.2 };
        expect(calculateMonthlyPayment(values)).toEqual('204.40');
    });

    it('should calculate the monthly rate correctly for large amount', function () {
        const values = { amount: 1000000, years: 40, rate: 3.5 };
        expect(calculateMonthlyPayment(values)).toEqual('3873.91');
    });


    it("should return a result with 2 decimal places", function () {
        const values = { amount: 15813, years: 12, rate: 3.7 };
        expect(calculateMonthlyPayment(values)).toEqual('136.16');
    });

})


describe('interest rate test low to high', function () {

    it("should return a result for low interest rate", function () {
        const values = { amount: 10000, years: 5, rate: 0.01 };
        expect(calculateMonthlyPayment(values)).toEqual('166.71');
    });

    it("should return a result for high interest rate", function () {
        const values = { amount: 14000, years: 8, rate: 99.9 };
        expect(calculateMonthlyPayment(values)).toEqual('1166.04');
    });

})





