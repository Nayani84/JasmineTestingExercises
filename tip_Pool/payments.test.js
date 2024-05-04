describe('payments test (with setup and tear-down)', function () {

    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    });

    it('should not add empty input on submitPaymentInfo() as new payment to allPayments', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should append td to the paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentTdList.length).toEqual(4);
        expect(currentTdList[0].innerText).toEqual('$200');
        expect(currentTdList[1].innerText).toEqual('$20');
        expect(currentTdList[2].innerText).toEqual('10%');
        expect(currentTdList[3].innerText).toEqual('X');
    });

    it('should create a new payment on createCurPayment()', function () {
        let newPayment = { billAmt: '200', tipAmt: '20', tipPercent: 10 };
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(newPayment);
    });

    it('should not create payment for empty input on createCurPayment()', function () {

        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

});