let id = 0;
//found element add button by id in DOM, eventListener for response upon click
document.getElementById('add').addEventListener('click', () => {
    //assigning variable to createdDate, new Date() already-available  constructor
    let createdDate = new Date();
    //targeting the list table and assigning variable name of table
    let table = document.getElementById('list');
    //assigning variable row to specified table and using already-available construcotr insertRow()
    let row = table.insertRow(1);
    //these sets attributes to the defied row to have both and id and item-id
    row.setAttribute(`id`, `item-${id}`);
    //all insert cells into the row specified, one for text input value, one for date created, and another two for date input and formatting 
    row.insertCell(0).innerHTML = document.getElementById('new-commission').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    //assigning variable name for fourth cell in given row. appendChild() adds node to end of child list under parent node
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-commission').value = '';
})

//creating a function for delete button to be developed upon each row development 
function createDeleteButton(id) {
    //assigning variable btn to be a normal button, assigning class name to button, id, and text inside button. 
    let btn = document.createElement('button');
    btn.className = 'button';
    btn.id = id;
    btn.innerHTML = 'Remove';
    //upon click, buttong will perform specified function- relay to the console on successful deletion. target parent node and specified child of cell to delete
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    //this ensures the button for deletion is displayed, and will only disappear along with the row when clicked
    return btn;
}