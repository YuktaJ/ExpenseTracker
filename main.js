function description_submit(event) {
    event.preventDefault();

    let expenses = document.getElementById("expenseAmount").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("inputGroupSelect04").value;

    //console.log(expenses, description, category);
    let obj = {
        expenses,
        description,
        category
    }
    var new_obj = JSON.stringify(obj);
    localStorage.setItem("Expense 1:", new_obj);
    StoreObjects(obj)
}

function StoreObjects(obj) {
    const ul1 = document.getElementById("listOfExpenses");
    const createLi = document.createElement("li");
    createLi.textContent = "Expenses: " + obj.expenses + " " + "Description: " + obj.description + " " + "Category: " + obj.category + "        ";


    let delete_button = document.createElement("input");
    delete_button.type = "button";
    delete_button.value = "DELETE";
    delete_button.className = "btn btn-outline-danger";
    createLi.appendChild(delete_button);

    let edit_button = document.createElement("input");
    edit_button.type = "button";
    edit_button.value = "EDIT";
    edit_button.className = "btn btn-outline-primary";
    createLi.appendChild(edit_button);
    ul1.appendChild(createLi);
    delete_button.onclick = deletion;

    function deletion() {
        localStorage.removeItem("Expense 1:");
        ul1.removeChild(createLi);
    }


    //arrow function for edit

    edit_button.onclick = () => {
        deletion();
        document.getElementById("expenseAmount").value = obj.expenses;
        document.getElementById("description").value = obj.description;
        document.getElementById("inputGroupSelect04").value = obj.category;
    }
};



