

// const container = document.querySelector(".container");
// const todoForm = document.querySelector(".todo-form");
// const inputTodo = document.querySelector("#inputTodo");
// const addTodoButton = document.querySelector("#addTodoButton");
// const todoLists = document.getElementById("lists");
// const messageElement = document.getElementById("message")

//     //showMessage
//     const showMessage = (text,status) =>{
//         messageElement.textContent = text;
//         messageElement.classList.add(`bg-${status}`);
//         setTimeout(() =>{
//             messageElement.textContent = "";
//             messageElement.classList.remove(`bg-${status}`);
//         },1000);

        
//     }

//     // createTodo
//     const createTodo = (todoId,todoValue) =>{
//         const createTodoElement = document.createElement("li");
//         createTodoElement.id = todoId;
//         createTodoElement.classList.add("li-style");
//         createTodoElement.innerHTML = `
//         <span>${todoValue}</span>
//         <span><button class="btn" id="delete-button"><i class="fa-solid fa-trash"></i></button> </span>
//         `
//         todoLists.appendChild(createTodoElement);

//         // delete todo
//         const selectedButton = document.querySelector("#delete-button");
//        selectedButton.addEventListener("click", function(event){
//             const listParentElement = event.target.parentElement.parentElement.parentElement;
//             todoLists.removeChild(listParentElement);
//             showMessage("todo is deleted", "danger")
//        })
       
//     }

//     //get todos from localStorage
//     const getTodosFormLocalStorage = () =>{
//         return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [] ;

//     }

//     const addTodo = (event) =>{
//         event.preventDefault();
//         const todoValue = inputTodo.value;
//     //    unique ID
//         const todoId = Date.now().toString();
//         // console.log(todoId);

//         createTodo(todoId, todoValue)
//         showMessage("todo is added", "success");

//         // add todo localStorage
//         const todos = getTodosFormLocalStorage();
//         todos.push({todoId, todoValue});
//         localStorage.setItem("myTodos", JSON.stringify(todos))

//         inputTodo.value = ""
//     }
//     // adding listners
//     todoForm.addEventListener("submit", addTodo);

    // step 1: find all the html elemnets and add listeners
    // step 2 : add todo
    // step 3 : showMessage
    // step 4: adding todos in localStorage
    // step 5: delete todo
    // step 6 : read todo

    // const selectedTodoForm = document.querySelector(".todo-form")
    // const selectedInputTodo = document.querySelector("#inputTodo");
    // const selectedTodoButton = document.querySelector("#addTodoButton");
    // const selectedMessage = document.querySelector("#message");
    // const selectedLists = document.querySelector("#lists");
   //adding todos in localStorage
//    const addLocalStorage = () =>{
//         const getLocalStorageTodos = localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
//         getLocalStorageTodos.push({RandomTodoId, userProvide})
//         localStorage.setItem("myTodos", JSON.stringify(getLocalStorageTodos))
//         selectedInputTodo.value = "";
//    }
//    addLocalStorage();
    // showMessage
    // const showMessageTodoAdded = () =>{
    //     selectedMessage.textContent = 'todo is added';
    //     selectedMessage.classList.add("bg-success")
    //     setTimeout(()=>{
    //        selectedMessage.textContent = "";
    //        selectedMessage.classList.remove("bg-success")
    //     }, 1000)
    // }
    // // deleteMessage
    // const deleteMessageTodoDelete = () =>{
    //     selectedMessage.textContent = 'todo is deleted';
    //     selectedMessage.classList.add("bg-danger")
    //     setTimeout(()=>{
    //        selectedMessage.textContent = "";
    //        selectedMessage.classList.remove("bg-danger")
    //     }, 1000)
    // }

    
       
        // //remove todos in localStorage
        // const todoId = createElement.id;
        // let getLocalStorageTodos = localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
        // getLocalStorageTodos = getLocalStorageTodos.filter((todo) => todo.todoId != todoId)
        // localStorage.setItem("myTodos", JSON.stringify(getLocalStorageTodos))
       
        const selectedTodoForm = document.querySelector(".todo-form")
        const selectedInputTodo = document.querySelector("#inputTodo");
        const selectedTodoButton = document.querySelector("#addTodoButton");
        const selectedMessage = document.querySelector("#message");
        const selectedLists = document.querySelector("#lists");
    //addEventListers
    selectedTodoForm.addEventListener("submit", function(event){
        event.preventDefault()
        const userProvide = selectedInputTodo.value;
        // console.log(userProvide);

        const RandomTodoId = Date.now().toString()
        addTodo(RandomTodoId,userProvide);
        addTodoLocalStorage(RandomTodoId, userProvide)
       removeTodoLocalStorag();
    })
    //    loadTodo
    window.addEventListener("DOMContentLoaded", function(){
        let getLocalStorageTodos = localStorage.getItem("myTodos") 
        ? JSON.parse(localStorage.getItem("myTodos")) 
        : [];
        getLocalStorageTodos.forEach(todo => addTodo(todo.RandomTodoId, todo.userProvide));
    });
    
   //add todo
   const addTodo = (RandomTodoId, userProvide) =>{
    const createElement = document.createElement("li");
    createElement.id = RandomTodoId;
    createElement.classList.add("li-style");
    createElement.innerHTML = `
        <span>${userProvide}</span>
        <span> <button class="btn" id="delete-button"><i class="fa-solid fa-trash"></i></button> </span>
    `
    selectedLists.appendChild(createElement);
    showMessageTodoAdded();
    
    // delete todo
    const selectDeleteButton = createElement.querySelector("#delete-button");
    selectDeleteButton.addEventListener("click", deleteTodo)
    
}    
// deleteTodo
const deleteTodo = (event) => {
    const deleteButtonParent = event.target.closest("li"); 
    selectedLists.removeChild(deleteButtonParent);
    deleteMessageTodoDelete()
     //remove todos in localStorage
    const todoId = deleteButtonParent.id;
    let getLocalStorageTodos = localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
     getLocalStorageTodos =  getLocalStorageTodos.filter(todo => todo.RandomTodoId != todoId)
    localStorage.setItem("myTodos", JSON.stringify(getLocalStorageTodos))
}; 
// showMessage
    const showMessageTodoAdded = () =>{
        selectedMessage.textContent = 'todo is added';
        selectedMessage.classList.add("bg-success")
        setTimeout(()=>{
           selectedMessage.textContent = "";
           selectedMessage.classList.remove("bg-success")
        }, 500)
     
    }
     // deleteMessage
    const deleteMessageTodoDelete = () =>{
        selectedMessage.textContent = 'todo is deleted';
        selectedMessage.classList.add("bg-danger")
        setTimeout(()=>{
           selectedMessage.textContent = "";
           selectedMessage.classList.remove("bg-danger")
        }, 1000)
    }
    //   adding todos in localStorage
   const addTodoLocalStorage = (RandomTodoId,userProvide) =>{
    const getLocalStorageTodos = localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
    getLocalStorageTodos.push({RandomTodoId, userProvide});
    localStorage.setItem("myTodos", JSON.stringify(getLocalStorageTodos));
    selectedInputTodo.value = "";
   }
  

 