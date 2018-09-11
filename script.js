let list = document.getElementById('list');

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', addTask);

let removeBtn = document.getElementById('delete');
removeBtn.addEventListener('click', deleteLastTask);

function disableAdd(flag) { addBtn.disabled = flag; }

function disableSave(event, flag) { event.currentTarget.parentNode.childNodes[1].disabled = flag; }

function disableEdit(event, flag) { event.currentTarget.parentNode.childNodes[2].disabled = flag; }

function disableRemove(event, flag) { event.currentTarget.parentNode.childNodes[3].disabled = flag; }

function deleteTask() { event.currentTarget.parentNode.remove(); }

function deleteLastTask() {
    list.removeChild( list.childNodes[ list.childElementCount - 1 ] );
}

function addTask() {
    // disableAdd(true);

    let task = document.createElement('div');
    list.appendChild(task);

    let taskStyle = `
        width: 80%;
        height: 70px;
        border-radius: 10px;
        background-color: #bbbbbb;
        text-align: center;
        margin: auto;
        margin-top: 15px;
    `;
    task.style = taskStyle;

    let inputDiv = document.createElement('div');
    task.appendChild(inputDiv);

    let inputDivStyle = `
        width: 67%;
        height: 70%;
        display: inline-block;
    `;
    inputDiv.style = inputDivStyle;

    let input = document.createElement('textarea');
    inputDiv.appendChild(input);

    let inputStyle = `
        width: 95%;
        height: 90%;
        border-radius: 10px;
        background-color: gainsboro;
        font-size: 14px;
        border: none;
        outline: none;
        display: table-cell;
        margin-top: 11px;
    `;
    input.style = inputStyle;

    let btnDiv = document.createElement('div');
    task.appendChild(btnDiv);

    let btnDivStyle = `
        width: 30%;
        height: 70%;
        display: inline-block;
        vertical-align: middle;
        margin-top: auto;
    `;
    btnDiv.style = btnDivStyle;

    let saveBtn = document.createElement('button');
    btnDiv.appendChild(saveBtn);

    let saveBtnStyle = `
        width: 25%;
        height: 90%;
    `;
    // saveBtn.addEventListener("click", saveTask);
    saveBtn.style = saveBtnStyle;
    saveBtn.textContent="Save";
    
    let editBtn = document.createElement('button')
    btnDiv.appendChild(editBtn);

    let editBtnStyle = `
        width: 25%;
        height: 90%;
    `;
    // editBtn.addEventListener("click", editTask);
    editBtn.style = editBtnStyle;
    editBtn.textContent="Edit";
    editBtn.disabled=true;
    
    let removeBtn = document.createElement('button');
    btnDiv.appendChild(removeBtn);

    let removeBtnStyle = `
        width: 35%;
        height: 90%;
    `;
    // removeBtn.addEventListener('click', deleteTask);
    removeBtn.style = removeBtnStyle;
    removeBtn.textContent="Delete";
    removeBtn.disabled=true;
}

function saveTask() {
    disableAdd(false);
    disableSave(event, true);
    disableEdit(event, false);
    disableRemove(event, false);

    let taskText = event.currentTarget.previousSibling.value;
    let text = document.createElement('span');
    text.textContent = taskText;
    event.currentTarget.parentNode.replaceChild(text, event.currentTarget.previousSibling);
}

function editTask() {
    disableAdd(true);
    disableSave(event, false);
    disableEdit(event, true);
    disableRemove(event, true);

    let taskText = event.currentTarget.parentNode.childNodes[0].textContent;
    let input = document.createElement('input');
    input.value = taskText;
    event.currentTarget.parentNode.replaceChild(input, event.currentTarget.parentNode.childNodes[0]);
}