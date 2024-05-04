window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            update();
        });
        
        const arp = document.getElementById("loan-rate");
        arp.addEventListener("blur", () => {
            if (arp.value.indexOf("%") < 0) {
                arp.value = (arp.value === "" ? "0.00" : arp.value) + "%";
            }
        });
    
        const prin = document.getElementById("loan-amount");
        prin.addEventListener("blur", () => {
            if (prin.value.indexOf("$") < 0) {
                prin.value = "$" + (prin.value === "" ? "0.00" : prin.value);
            }
        });
    }

   

});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value.replace(/[^\d.-]/g, '')),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value.replace(/[^\d.-]/g, '')),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values = { amount: 10000, years: 5, rate: 3.5 };
    const amountForm = document.getElementById("loan-amount");
    amountForm.value = '$' + values.amount;
    const yearsForm = document.getElementById("loan-years");
    yearsForm.value = values.years;
    const rateForm = document.getElementById("loan-rate");
    rateForm.value = values.rate + '%';
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentFormValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentFormValues))

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const p = values.amount;
    const i = ((values.rate / 100) / 12);
    const n = (values.years * 12);
    const mp = ((p * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
    return mp;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyPayForm = document.getElementById("monthly-payment");
    monthlyPayForm.innerText = `$${monthly}`;
}



