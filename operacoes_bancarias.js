//Bank transactions
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

//Function that add a transaction to the array
function createTransaction(transaction) {
  user.transactions.push(transaction)

  if(transaction.type === "credit") {
    
    user.balance+= transaction.value
  } else {
    user.balance-= transaction.value
  }
}

//Reports
function getHigherTransactionByType(type) {
  let higherTransaction
  let higherValue = 0
  for (let transaction of user.transactions) {
    if(transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue() {
  let sum = 0 

  for(let transaction of user.transactions) {
    sum += transaction.value
  }

  return sum / user.transactions.length

}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0,
  }
  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') 
      count.credit++
    else 
      count.debit++
    
  }
  return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "credit", value: 170 });
createTransaction({ type: "debit", value: 110 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
