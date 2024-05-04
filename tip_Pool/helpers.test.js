describe('helpers test (with setup and tear-down)', function () {

    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total bill amount of allPayments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 300;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(500);
    });

    it('should sum total tip amount of allPayments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(50);
    });

    it('should sum total tip percent of allPayments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(10);

        billAmtInput.value = 300;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should calculate tip percent for payment on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(81, 8)).toEqual(10);
    });

    it('should generate new td on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate new td and append to tr on appendDeleteBtn(tr , type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    })

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