"use strict";
main();
function main() {
    var transactions = [
        {
            id: "t1",
            type: "PAYMENT",
            status: "OPEN",
            method: "CREDIT_CARD",
            amount: "23.99",
        },
        {
            id: "t2",
            type: "PAYMENT",
            status: "OPEN",
            method: "PAYPAL",
            amount: "100.43",
        },
        {
            id: "t3",
            type: "REFUND",
            status: "OPEN",
            method: "CREDIT_CARD",
            amount: "10.99",
        },
        {
            id: "t4",
            type: "PAYMENT",
            status: "CLOSED",
            method: "PLAN",
            amount: "15.99",
        },
    ];
    processTransactions(transactions);
}
function processTransactions(transactions) {
    if (isEmpty(transactions)) {
        return showError("No transactions provided!");
    }
    for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
        var transaction = transactions_1[_i];
        try {
            processTransaction(transactions);
        }
        catch (error) {
            showError(error);
        }
    }
}
function processTransaction(transaction) {
    if (transaction.status !== "OPEN") {
        showError("Invalid transaction type!");
        return;
    }
    var _a = {
        CC: "CREDIT_CARD",
        paypal: "PAYPAL",
        plan: "PLAN",
    }, CC = _a.CC, paypal = _a.paypal, plan = _a.plan;
    if (transaction.type === "PAYMENT") {
        switch (transaction.method) {
            case CC:
                processCreditCardPayment(transaction);
                break;
            case paypal:
                processPayPalPayment(transaction);
                break;
            case plan:
                processPlanPayment(transaction);
                break;
        }
    }
    else if (transaction.type === "REFUND") {
        switch (transaction.method) {
            case CC:
                processCreditCardRefund(transaction);
                break;
            case paypal:
                processPayPalRefund(transaction);
                break;
            case plan:
                processPlanRefund(transaction);
                break;
        }
    }
    else {
        showError("Invalid transaction type!" + transaction);
    }
}
function isEmpty(transactions) {
    return !transactions || transactions.length === 0;
}
function showError(msg) {
    throw new Error(msg);
}
function processCreditCardPayment(transaction) {
    console.log("Processing credit card payment for amount: " + transaction.amount);
}
function processCreditCardRefund(transaction) {
    console.log("Processing credit card refund for amount: " + transaction.amount);
}
function processPayPalPayment(transaction) {
    console.log("Processing PayPal payment for amount: " + transaction.amount);
}
function processPayPalRefund(transaction) {
    console.log("Processing PayPal refund for amount: " + transaction.amount);
}
function processPlanPayment(transaction) {
    console.log("Processing plan payment for amount: " + transaction.amount);
}
function processPlanRefund(transaction) {
    console.log("Processing plan refund for amount: " + transaction.amount);
}
