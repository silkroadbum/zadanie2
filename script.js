'use strict';

let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");
let c = prompt("Введите обязательную статью расходов в этом месяце");
let d = prompt("Во сколько обойдется?");

appData.expenses[a] = b;
appData.expenses[c] = d;

alert(appData.budget / 30);