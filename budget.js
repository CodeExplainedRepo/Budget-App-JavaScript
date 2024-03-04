// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".outcome-total");
const outcomeTotalEl = document.querySelector(".income-total");
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
element.classList.add("active");
element.classList.remove("active");


// List 
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// Input Buttons
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// TOGGLING
// Functions
function active(element) {
    element.classList.add("active");
}

function show(element) {
    element.classList.remove("hide");
}

for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].classList.add("hide")
}

function hide(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.add("hide");
    })
}

function inactive(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.remove("active");
    })
}

// Event Listeners
expenseBtn.addEventListener("click", function () {
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseEl);
    hide([incomeEl, allEl]);
})
incomeBtn.addEventListener("click", function () {
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeEl);
    hide([expenseEl, allEl]);
})
allBtn.addEventListener("click", function () {
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
    show(allEl);
    hide([incomeEl, expenseEl]);
})


// VARIABLES
let ENTRY_LIST;
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();