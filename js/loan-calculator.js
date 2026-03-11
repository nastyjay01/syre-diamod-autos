/**
 * Syre Diamond Autos - Loan Calculator
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const loanAmountRange = document.getElementById('loan-amount-range');
        const loanAmount = document.getElementById('loan-amount');
        const loanAmountDisplay = document.getElementById('loan-amount-display');
        
        const loanRateRange = document.getElementById('loan-rate-range');
        const loanRate = document.getElementById('loan-rate');
        const loanRateDisplay = document.getElementById('loan-rate-display');
        
        const loanMonths = document.getElementById('loan-months');
        const monthlyPayment = document.getElementById('monthly-payment');
        const loanTotal = document.getElementById('loan-total');

        if (!loanAmount || !monthlyPayment) return;

        function calculateLoan() {
            const amount = parseFloat(loanAmount.value) || 0;
            const rate = parseFloat(loanRate ? loanRate.value : 12) || 0;
            const months = parseInt(loanMonths ? loanMonths.value : 48) || 1;
            
            const monthlyRate = (rate / 100) / 12;
            
            let payment = 0;
            if (rate > 0) {
                payment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            } else {
                payment = amount / months;
            }
            
            const total = payment * months;
            
            if (monthlyPayment) {
                monthlyPayment.textContent = 'KSh ' + Math.round(payment).toLocaleString();
            }
            if (loanTotal) {
                loanTotal.textContent = 'Total Payment: KSh ' + Math.round(total).toLocaleString();
            }
        }

        // Event listeners
        if (loanAmountRange) {
            loanAmountRange.addEventListener('input', function() {
                if (loanAmount) loanAmount.value = this.value;
                if (loanAmountDisplay) {
                    loanAmountDisplay.textContent = 'KSh ' + parseInt(this.value).toLocaleString();
                }
                calculateLoan();
            });
        }

        if (loanAmount) {
            loanAmount.addEventListener('input', function() {
                if (loanAmountRange) loanAmountRange.value = this.value;
                if (loanAmountDisplay) {
                    loanAmountDisplay.textContent = 'KSh ' + parseInt(this.value).toLocaleString();
                }
                calculateLoan();
            });
        }

        if (loanRateRange) {
            loanRateRange.addEventListener('input', function() {
                if (loanRate) loanRate.value = this.value;
                if (loanRateDisplay) {
                    loanRateDisplay.textContent = this.value + '%';
                }
                calculateLoan();
            });
        }

        if (loanRate) {
            loanRate.addEventListener('input', function() {
                if (loanRateRange) loanRateRange.value = this.value;
                if (loanRateDisplay) {
                    loanRateDisplay.textContent = this.value + '%';
                }
                calculateLoan();
            });
        }

        if (loanMonths) {
            loanMonths.addEventListener('change', calculateLoan);
        }

        // Initial calculation
        calculateLoan();
    });

})();
