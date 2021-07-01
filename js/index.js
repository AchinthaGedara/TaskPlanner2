// Initialize a new TaskManager with currentId set to 0 
// Create object from class TaskManager
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.printDiv();

var numclick = 0;
function markDoneDiv(id){
  numclick = 1;
  for (let i = 0; i < taskManager.tasks.length; i++) {
    let taskID = taskManager.tasks[i].task.id;
    if(id === taskID){
      taskManager.tasks[i].task.status = 'Done';
      console.log(taskManager.tasks[i].task.status);    
      taskManager.printDiv();    
      break;
    }
    else{
    console.log('No Match');
    }
  }
}

// Select the New Task Form
const form = document.querySelector("#addTaskForm");

// Add an 'onsubmit' event listener
form.addEventListener("submit", (event) => {  

  let txtTaskName =  document.querySelector('#txtTaskName');
  let txtTaskDescription =  document.querySelector('#txtTaskDescription');
  let txtDate =  document.querySelector('#txtDate');
  let txtAssignedTo =  document.querySelector('#txtAssignedTo');
  let selectStatus =  document.querySelector('#selectStatus');
  //let btnAddTask =  document.querySelector('#btnAddTask');

  //err message
  let errMessageName =  document.querySelector('#errMessageName');
  let errMessageDescription =  document.querySelector('#errMessageDescription');
  let errMessageDate =  document.querySelector('#errMessageDate');
  let errMessageAssigned =  document.querySelector('#errMessageAssigned');
  let errMessageStatus =  document.querySelector('#errMessageStatus');

  let validationFail = 0;

  // Prevent default action
  event.preventDefault();

  // Clear error after 1.6 s
  const clearError= () =>{
    errMessageName.innerHTML = "";
    errMessageDate.innerHTML = "";
    errMessageDescription.innerHTML = "";
    errMessageStatus.innerHTML = "";
    errMessageAssigned.innerHTML = "";
    txtTaskName.removeAttribute('style');
    txtTaskDescription.removeAttribute('style');
    txtAssignedTo.removeAttribute('style');
    txtDate.removeAttribute('style');
    selectStatus.removeAttribute('style');
  
}

// 1. Check if the Task Name input value is more than 5 characters.
// 2. Check if the Task Description input value is more than 5 characters.
// 3. Check if the Assigned To value is more than 5 characters.
// 4. Check if the Task Due Date input value is not empty.
// 5. Check if the Task Status input value is not empty.

  //use trim() to check whitespace characters
  if(txtTaskName.value.trim().length < 5 || txtTaskName.value === ""){
    //console.log(txtTaskName.value.trim().length);
    errMessageName.innerHTML = "Please input more than 5 characters";
    errMessageName.style.color= "red";
    txtTaskName.style.borderColor = "red";
    validationFail++;        
  } 
  else{    
    errMessageName.innerHTML = "Well done!";
    errMessageName.style.color= "green";
    txtTaskName.style.borderColor = "green";
  }

  // condition of Task Description
  if(txtTaskDescription.value.trim().length < 5|| txtTaskDescription.value === ""){
    errMessageDescription.innerHTML = "Please input more than 5 characters";
    errMessageDescription.style.color= "red";
    txtTaskDescription.style.borderColor = "red";
    validationFail++;
  } 
  else {
    errMessageDescription.innerHTML = "Well done!";
    errMessageDescription.style.color= "green";
    txtTaskDescription.style.borderColor = "green";    
  }
  
  if(txtAssignedTo.value.trim().length < 5 || txtAssignedTo.value === ""){
    errMessageAssigned.innerHTML = "Please input more than 5 characters";
    errMessageAssigned.style.color= "red";
    txtAssignedTo.style.borderColor = "red";
    validationFail++;
  } 
  else {
    errMessageAssigned.innerHTML = "Well done!";
    errMessageAssigned.style.color= "green";
    txtAssignedTo.style.borderColor = "green";    
  }  

  if(txtDate.value == "" ){
    //console.log('i am in date');
    errMessageDate.innerHTML = "Please provide a valid date";   
    errMessageDate.style.color= "red";
    txtDate.style.borderColor = "red";
    validationFail++;
  } 
  else {
    errMessageDate.innerHTML = "Well done!";   
    errMessageDate.style.color= "green";
    txtDate.style.borderColor = "green"; 
  }

  if(selectStatus.value === "Choose the Status"){
    //console.log('i am in status');
    errMessageStatus.innerHTML = "Please choose status";
   
    errMessageStatus.style.color= "red";
    selectStatus.style.borderColor = "red";
    validationFail++;
  }
  else {
    errMessageStatus.innerHTML = "Well done!";    
    errMessageStatus.style.color= "green";
    selectStatus.style.borderColor = "green";            
  }


  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------
  
  if (validationFail > 0) {
    validationFail = 0;     
    return;
  } 
  else {
    // Push the valid input into our tasks array
  taskManager.addTask(
        txtTaskName.value,
        txtTaskDescription.value,
        txtAssignedTo.value,
        txtDate.value,
        selectStatus.value);     
  clearError();
  errMessageAssigned.innerHTML = "";
  form.reset(); 
  taskManager.printDiv();     
  }
}
);

// Adding event listner to divTasks in order to perform delete task
divTasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton"))
  {
    const taskId = Number(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute("cardid"));
    console.log(event.target.parentElement.parentElement.parentElement);
    taskManager.deleteTask(taskId);    
  }
});
