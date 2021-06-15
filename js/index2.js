// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);
///////////// add first load data
taskManager.addTask('Take out the trash', 'take out the trash to the front of the house', 'Nick', '2020-09-20','In Progress');
taskManager.addTask('Cook Dinner','Prepare a healthy serving of pancakes for the family tonight','Nick','2020-09-20','In Progress');
taskManager.addTask('Go Shpping','Buy Banana','Dave','2020-09-20','Done');
console.log(taskManager);
taskManager.printDiv();
////////////

// Select the New Task Form
const form = document.querySelector("#addTaskForm");

// Add an 'onsubmit' event listener
form.addEventListener("submit", (event) => {
  

  let txtTaskName =  document.querySelector('#txtTaskName');
  let txtTaskDescription =  document.querySelector('#txtTaskDescription');
  let txtDate =  document.querySelector('#txtDate');
  let txtAssignedTo =  document.querySelector('#txtAssignedTo');
  let selectStatus =  document.querySelector('#selectStatus');
  let btnAddTask =  document.querySelector('#btnAddTask');

  //err message
  
  let errMessageName =  document.querySelector('#errMessageName');
  let errMessageDescription =  document.querySelector('#errMessageDescription');
  let errMessageDate =  document.querySelector('#errMessageDate');
  let errMessageAssigned =  document.querySelector('#errMessageAssigned');
  let errMessageStatus =  document.querySelector('#errMessageStatus');




  let validationFail = 0;

  // Prevent default action
  event.preventDefault();

  // Call this to clear all the form fields after the submission
  const clearFormFields = () => {
    txtTaskName.value = "";
    txtTaskDescription.value = "";
    txtAssignedTo.value = "";
    txtDate.value = "";
    selectStatus.value = ""

  };

  console.log("Task Name :" + txtTaskName.value.length);
  console.log("Task Description :" + txtTaskDescription.value.length);
  console.log("Task Assigned To :" + txtAssignedTo.value.length);
  console.log("Task Due Date :" + txtDate.value);
  console.log("Task Status:" + selectStatus.value);

  //////////////
    // 1. Check if the Task Name input value is more than 5 characters.
// 2. Check if the Task Description input value is more than 5 characters.
// 3. Check if the Assigned To value is more than 5 characters.
// 4. Check if the Task Due Date input value is not empty.
// 5. Check if the Task Status input value is not empty.


  if(txtTaskName.value.length < 5 || txtTaskName.value === ""){
    errMessageName.innerHTML = "Please input more than 5 character";
    errMessageName.style.color= "red";
    txtTaskName.style.borderColor = "red";
    validationFail++;
    
    
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
    validationFail++;
  } else {
    errMessageDescription.innerHTML = "Well done!";
    errMessageDescription.style.color= "green";
    txtTaskDescription.style.borderColor = "green";
    
  }
  
  if(txtAssignedTo.value.length < 5){
    errMessageAssigned.innerHTML = "Please input more than 5 character";
    errMessageAssigned.style.color= "red";
    txtAssignedTo.style.borderColor = "red";
    validationFail++;
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
    validationFail++;
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
    validationFail++;
  } else {
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
  } else {
    // Push the valid input into our tasks array
    taskManager.addTask(
        txtTaskName.value,
        txtTaskDescription.value,
        txtAssignedTo.value,
        txtDate.value,
        selectStatus.value
    );
    clearFormFields();
    taskManager.printDiv();
  }







});