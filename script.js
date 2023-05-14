

let add = document.querySelector('.input img');
let input  =document.querySelector('.box input');
let list = document.querySelector('ul');
let edit = document.querySelector('.edit');
let p;
let span;
let t = true;
let originalHeight;
const  taskAccomplished = (tk)=>{
  
    if(tk.getAttribute('data-editable') != 'true'){

        if(t){
    
            tk.parentElement.querySelector("input[type ='checkbox']").style.display = 'block';
            tk.parentElement.querySelector("p").style.textDecoration = 'line-through';
            tk.parentElement.querySelector('.edit').style.display = 'none';
            
            t = false;
        }
        else{
            tk.parentElement.querySelector("input[type ='checkbox']").style.display = 'none';
            tk.parentElement.querySelector("p").style.textDecoration = 'none';
            tk.parentElement.querySelector('.edit').style.display = 'block';

             t = true;
        }
    }


   
}

function back(bk){
    bk.style.display = 'none';
    bk.parentElement.querySelector('p').setAttribute('data-editable','false');
    bk.parentElement.querySelector('p').contentEditable = false;
    bk.parentElement.querySelector('p').style.cursor = 'pointer';
    bk.parentElement.querySelector('.edit').style.display = 'block';
    bk.parentElement.querySelector('.delete').style.display = 'block';
    bk.parentElement.style.height = originalHeight;
    bk.parentElement.querySelector('span').style.display = 'none';
    bk.parentElement.querySelector('p').style.marginTop = '0px'

}
function editTask(e){
    if(span != undefined){
        back(span);
        console.log(span);
    }
    
    span = e.parentElement.querySelector('span');
    originalHeight = e.parentElement.style.height;
    p = e.parentElement.querySelector('p');
    p.contentEditable = true;
    
    p.focus();
    p.setAttribute('data-editable','true');
    p.style.cursor = 'auto';
    e.style.display = 'none';
    e.parentElement.querySelector('.delete').style.display = 'none';
    e.parentElement.style.height = '30%'
    span.style.display = 'block';
    p.style.marginTop = '32px';

}
const deleteTask=(del)=>{
    del.parentElement.style.display = 'none';
   }

   const addingTask =()=>{
    if(input.value == ""){
        alert('first add item');
    }
    else{

        
        list.innerHTML = list.innerHTML+`<li >
        <input type="checkbox" name="" id="" checked disabled>
        <span onclick='back(this)'>&#x2190;</span>
        <p onclick="taskAccomplished(this)" data-editable="false">${input.value}</p>
        <img src="./images/noun-edit-5403236.svg" alt="" class="edit" onclick="editTask(this)">
        <img class='delete' src="./images/noun-delete-4460244.svg" alt="" onclick="deleteTask(this)">
        </li>`
        add.style.display = 'none';
        input.value = "";
        
    }

}

input.addEventListener('keyup',(e)=>{
   
    if(e.key == 'Enter'){
        console.log(e.key)
        addingTask();
    }
    else if(input.value != ""){
        document.querySelector('#add').style.display = 'block';
    }
    else{
        document.querySelector('#add').style.display = 'none';
    }
})
add.addEventListener('click',addingTask);



