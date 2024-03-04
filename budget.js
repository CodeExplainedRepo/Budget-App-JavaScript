// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const chartEl = document.querySelector(".chart");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
element.classList.add("hide");
element.classList.remove("hide");

// Buttons
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// List 
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

// Input Buttons
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// VARIABLES
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();

// TOGGLING
// Functions
function show(element) {
    element.classList.remove("hide");
}

function hide(elements) {
    elements.forEach(element => {
        element.classList.add("hide");
    });
}

function active(element) {
    element.classList.add("active");
}

function inactive(elements) {
    elements.forEach(element => {
        element.classList.remove("active");
    });
}

// Event Listeners
expenseBtn.addEventListener("click", function () {
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
})
incomeBtn.addEventListener("click", function () {
    show(incomeEl);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function () {
    show(allEl);
    hide([incomeEl, expenseEl]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
})

addExpense.addEventListener("click", function () {
    // If one of the inputs is empty => Exit
    if (!expenseTitle.value || !expenseAmount.value) return;
    // Save entry to entry list
    let expense = {
        type: "expense",
        title: expenseTitle.value,
        amount: parse(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);
    updateUI();
    clearInput([expenseTitle.value, expenseAmount.value])
});

addIncome.addEventListener("click", function () {
    if (!incomeTitle.value || !incomeAmount.value) return;
    // Save entry to entry list
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: parseInt(incomeAmount.value)
    }
    ENTRY_LIST.push(income);
    updateUI();
    clearInput([incomeTitle.value, incomeAmount.value]);
});

// Helpers
function updatUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = calculateBalance(income, outcome);

    // Update UI
    clearElement([expenseList, incomeList, allList]);

    // DETERMINE SIGN OF BALANCE
    let sign = (income >= outcome) ? "R" : "-R";
}

// Calculating the balance, income, and outcome
function calculateTotal(type, list) {
    let sum = 0;

    list.forEach(entry => {
        if (entry.type == type) {
            sum += entry.amount;
        }
    })

    return sum;
}

function calculateBalance(income, outcome) {
    return income - outcome;
}


function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = " ";
    });
}