const taskManager = new TaskManager(0);



const txtTaskName =  document.querySelector('#txtTaskName');
const txtTaskDescription =  document.querySelector('#txtTaskDescription');
const txtDate =  document.querySelector('#txtDate');
const txtAssignedTo =  document.querySelector('#txtAssignedTo');
const selectStatus =  document.querySelector('#selectStatus');
const btnAddTask =  document.querySelector('#btnAddTask');

// errMessage 
const errMessageName =  document.querySelector('#errMessageName');
const errMessageDescription =  document.querySelector('#errMessageDescription');
const errMessageDate =  document.querySelector('#errMessageDate');
const errMessageAssigned =  document.querySelector('#errMessageAssigned');
const errMessageStatus =  document.querySelector('#errMessageStatus');




function validFormFieldInput(){
    console.log(`Name: ${txtTaskName.value}`);
    console.log(`Description: ${txtTaskDescription.value}`);
    console.log(`Date: ${txtDate.value}`);
    console.log(`Assigned to: ${txtAssignedTo.value}`);
    console.log(`Status: ${selectStatus.value}`);
    console.log(`Name: ${txtTaskName.value.length}`);
// 1. Check if the Task Name input value is more than 5 characters.
// 2. Check if the Task Description input value is more than 5 characters.
// 3. Check if the Assigned To value is more than 5 characters.
// 4. Check if the Task Due Date input value is not empty.
// 5. Check if the Task Status input value is not empty.
    if(txtTaskName.value.length < 5){
        
        errMessageName.innerHTML = "Please input more than 5 character";
        errMessageName.style.color= "red";
        txtTaskName.style.borderColor = "red";
    } else {
        errMessageName.innerHTML = "Well done!";
        errMessageName.style.color= "green";
        txtTaskName.style.borderColor = "green";
    }
    // condition of Task Description
    if(txtTaskDescription.value.length < 5){
        
        errMessageDescription.innerHTML = "Please input more than 5 character";
        errMessageDescription.style.color= "red";
        txtTaskDescription.style.borderColor = "red";
    } else {
        errMessageDescription.innerHTML = "Well done!";
        errMessageDescription.style.color= "green";
        txtTaskDescription.style.borderColor = "green";
    }

    if(txtAssignedTo.value.length < 5){
        
        errMessageAssigned.innerHTML = "Please input more than 5 character";
        errMessageAssigned.style.color= "red";
        txtAssignedTo.style.borderColor = "red";
    } else {
        errMessageAssigned.innerHTML = "Well done!";
        errMessageAssigned.style.color= "green";
        txtAssignedTo.style.borderColor = "green";
    }

    if(txtDate.value == "" ){
        //console.log('i am in date');
        errMessageDate.innerHTML = "Please provide a valid date";
       
        errMessageDate.style.color= "red";
        txtDate.style.borderColor = "red";
    } else {
        errMessageDate.innerHTML = "Well done!";
       
        errMessageDate.style.color= "green";
        txtDate.style.borderColor = "green";

    }
    if(selectStatus.value === "Choose the Status"){
        //console.log('i am in status');
        errMessageStatus.innerHTML = "Please choose status";
       
        errMessageStatus.style.color= "red";
        selectStatus.style.borderColor = "red";
    } else {
        errMessageStatus.innerHTML = "Well done!";
       
        errMessageStatus.style.color= "green";
        selectStatus.style.borderColor = "green";
    }
}


//btnAddTask.addEventListener("click",validFormFieldInput);
// import TaskManager from './taskManager.js'
// const toiditimem = new TaskManager();
// var TaskManager = require("taskManager.js");
// btnAddTask.addEventListener('click', toiditimem.addTask(txtTaskName.value,txtTaskDescription.value,txtDate.value));