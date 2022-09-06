'use strict';

/* <label class="to-do-item">
<input type="checkbox">
<div class="text">teste de item 1</div>
<input type="button" value="X">
</label> */

const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add("to-do-item");
    item.innerHTML = `
       <input type="checkbox">
       <div>${tarefa}</div>
       <input type="button" value="X">
       `

    document.getElementById("todoList").appendChild(item);
}   