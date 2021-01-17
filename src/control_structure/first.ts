main();

function main() {
  const transactions = [
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

function processTransactions(transactions: any) {
  if (isEmpty(transactions)) {
    return showError("No transactions provided!");
  }
  for (const transaction of transactions) {
    try {
      processTransaction(transactions);
    } catch (error) {
      showError(error);
    }
  }
}

function processTransaction(transaction: any) {
  if (transaction.status !== "OPEN") {
    showError("Invalid transaction type!");
    return;
  }
  const { CC, paypal, plan } = {
    CC: "CREDIT_CARD",
    paypal: "PAYPAL",
    plan: "PLAN",
  };
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
  } else if (transaction.type === "REFUND") {
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
  } else {
    showError("Invalid transaction type!" + transaction);
  }
}

function isEmpty(transactions: any) {
  return !transactions || transactions.length === 0;
}

function showError(msg: any) {
  throw new Error(msg);
}

function processCreditCardPayment(transaction: any) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction: any) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction: any) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction: any) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction: any) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction: any) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}
