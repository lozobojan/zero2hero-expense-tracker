var counter = 0;
var total = 0;

function saveExpense(){
    counter++; // counter = counter + 1;

    let description = document.getElementById("expenseDescription").value;
    let amount = parseFloat(document.getElementById("expenseAmount").value);
    let list = document.getElementById("expenseList");

    total = total + amount;

    let newItemId = "item"+counter;
    let amountId = "amount"+counter;
    let newItem = `<li contenteditable id='${newItemId}'>
                                    ${description} (<span id="${amountId}">${amount.toFixed(2)}</span>€)
                                    <button class='removeButton' onclick='removeExpense("${counter}")' >X</button> 
                    </li>`;

    let listContent = list.innerHTML;
    list.innerHTML = listContent + newItem;

    document.getElementById("h2Total").innerHTML = `Ukupno: ${total.toFixed(2)}€`;
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
}

function removeExpense(counter){
    // procitaj iznos ovog troska
    let currentAmount = document.getElementById("amount"+counter).innerHTML;
    // oduzmi od ukupuno
    total = total - parseFloat(currentAmount);
    // ukoloni element iz liste
    document.getElementById("item"+counter).remove();
    // ponovo prikazi novo ukupno
    document.getElementById("h2Total").innerHTML = `Ukupno: ${total.toFixed(2)}€`;
}