class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // Create the addTask method
  addTask(name, description, assignedTo, dueDate, status) {
    // Create a task object that we will push to the list of tasks
    
    const task = {
      // Increment the current Id for each new task
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push({ task });
    //this.addDiv(name, description, assignedTo, dueDate, status);
    //this.print(name, description, assignedTo, dueDate, status);
  }

  get task(){
    return this.tasks;
  }


  addDiv(name, description, assignedTo, dueDate, status){
          var node = document.createElement("DIV");
          node.innerHTML = `<h1>${description} ${assignedTo}</h1>`;       
          //node.appendChild(textnode);                              
          document.getElementById("#divTasks").appendChild(node);   

  }
  printDiv() {
          let contentDiv ="";
          for (let i = 0; i < this.tasks.length; i++) {
            //this.tasks[i].displayTranslation(); q
            let taskItem = this.tasks[i].task;
            let taskItemName = taskItem.name;
            let taskItemDescription = taskItem.description;
            let taskItemAssigned = taskItem.assignedTo;
            let taskItemDate = taskItem.dueDate;
            let taskItemStatus = taskItem.status;
            //console.log(this.tasks[i]['task']);

            // var tag = document.createElement("div");
            // var text = document.createTextNode("Tutorix is the best e-learning platform");
            // tag.appendChild(text);
            // var element = document.getElementById("#divTask");
            // element.appendChild(tag);

            contentDiv += `<div class="col">  
            <!-- task 1 start -->
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <a data-bs-toggle="collapse" href="#collapseTask1" role="button" aria-expanded="false" aria-controls="collapseTask1">
                        ${taskItemName}
                      </a>
                    
                </div>
                  <!-- collapse task 1 start -->
                <div class="collapse" id="collapseTask1">
                <div class="card-body">
                   <!-- task content start  -->
                    <p class="card-text">
                        Description :
                        <div> ${taskItemDescription} </div><br>
                    Assigned to: ${taskItemAssigned} <br>
                    Due date: ${taskItemDate} <br>
                    Status: ${taskItemStatus}
                  </p>
                    <button type="button" class="btn btn-outline-success">Mark as Done</button>
                    <button type="button" class="btn btn-outline-danger">Delete</button>
                    <!-- task content end -->
                </div>
                </div>   
                <!-- collapse task 1 end -->

              </div>
            <!-- end task 1 -->
        </div>`;

            
            

          }
          document.querySelector('#divTasks').innerHTML = contentDiv;
        }

}


//let arr = ['Take out the trash', 'take out the trash to the front of the house', 'Nick', '2020-09-20','In Progress'];

// const taskmanager = new TaskManager();
// //let arrA = ['Take out the trash', 'take out the trash to the front of the house', 'Nick', '2020-09-20','In Progress'];
// taskmanager.addTask('Take out the trash', 'take out the trash to the front of the house', 'Nick', '2020-09-20','In Progress');

// taskmanager.addTask('Cook Dinner','Prepare a healthy serving of pancakes for the family tonight','Nick','2020-09-20','In Progress');
// taskmanager.addTask('Go Shpping','Buy Banana','Dave','2020-09-20','Done');
// console.log(taskmanager);

// console.log('this is a array');
// console.log(taskmanager.task[2]);
// console.log(taskmanager.task[2].task);
// console.log(taskmanager.task[2].task.name);
// console.log(taskmanager.task[2].task.description);

// console.log('this is a array 33333');
// console.log(taskmanager.task[0]);
// console.log(taskmanager.task[0].task);
// console.log(taskmanager.task[0].task.name);
// console.log(taskmanager.task[0].task.description);
// console.log('this isabc');

// taskmanager.print();
// console.log('this is run code from textboc');




//taskmanager.addTask(txtTaskName.value, txtTaskDescription.value, txtAssignedTo.value, txtDate.value, selectStatus.value);
// var module.exports.TaskManager = TaskManager;
// btnAddTask.addEventListener('submit',addNew(txtTaskName.value, document.querySelector('#txtTaskDescription').value));





