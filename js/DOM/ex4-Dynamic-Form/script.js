const form = document.querySelector('#dynamicForm');

const addField = () => {
    const newField = document.createElement('input');
    form.appendChild(newField);
}

const submitForm = () => {
    const allInputsElements = document.querySelectorAll('#dynamicForm input');
    let allFilled = true;
    let message = '';
    allInputsElements.forEach((element) => {
        message += element.value + ' ';
        if (!element.value) {
            allFilled = false;
        }
    });
    alert(allFilled ? message : 'Error: please fill all field');
}