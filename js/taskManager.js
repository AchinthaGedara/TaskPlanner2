
//Sprint 2: TASK 7 createTaskHTML() AND RETURN html tags.
const createTaskHtml = (name,description,assignedTo,dueDate,status,id) => {
  console.log(id);
    
    const html = `<div class="col-md-3 col-sm-6 mb-3">  
              <!-- task 1 start -->
                <div class="card text-dark bg-light mb-3" cardid= "${id}" style="ma x-width: 18rem;" >
                  <div class="card-header" text-center id="cardHeader">
                    <a data-bs-toggle="collapse" href="#collapseTask1" role="button" aria-expanded="false" aria-controls="collapseTask1" style="color:black; font-weight:bold">
                        ${name}
                    </a>                    
                  </div>

                  <!-- collapse task 1 start -->
                  <div class="collapse text-left" id="collapseTask1">
                    <div class="card-body ">
                    <!-- task content start  -->
                          <p class="card-text text-left">
                              <span class= "collapseTask1Span"> Description :</span>
                              <div class="mt-0 pt-0"> ${description} </div><br>
                              <span class= "collapseTask1Span"> Assigned to: </span>${assignedTo} <br>
                              <span class= "collapseTask1Span"> Due date: </span>${dueDate} <br>
                              <span class= "collapseTask1Span">  Status: </span>${status}
                          </p>
                      <div class="d-flex justify-content-around">
                      
                      <button type="button" class="btn btn-outline-success doneButton" id="${id}" onclick='markDoneDiv(${id})'>Mark As Done</button>
                      <button type="button" class="btn btn-outline-danger deleteButton ">Delete</button>
                      </div>
                      <!-- task content end -->
                    </div>
                  </div>   
                  <!-- collapse task 1 end -->
                </div>
                 <!-- end task 1 -->
              </div>`;  
  return html;          
}  

// SPRINT2: TASK 6 --> Technical skills - Add Tasks programmatically
// When a new task is added with valid information, the data should be stored inside a JavaScript object. Each task object should be added to and stored in an array variable.
// The added task should be visible on the current tasks list and should display the task information.
// When adding a new task, the task id should be incremented and unique.

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // task 6:Create the addTask method
  addTask(name, description, assignedTo, dueDate, status) {
    // task 6: Create a task object that we will push to the list of tasks
    
    const task = {
      //task 6:  Increment the current Id for each new task
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    //task6: store in array
    this.tasks.push({ task });    
  }
  
  //save method start here
  save()
  {
      if(this.currentId >0)
      {
     // Create a JSON string
     const tasksJson = JSON.stringify(this.tasks);
     
      console.log(tasksJson);
     // Store the JSON string 
     localStorage.setItem("tasks", tasksJson);
 
     // Convert the currentId to a string
     const currentId = String(this.currentId);
     console.log(currentId);
 
     // Store the currentId in localStorage
     localStorage.setItem("currentId", currentId);
      }

  }


  //Loading values
  load(){
    if (localStorage.getItem("tasks"))
    {
    const tasksJson = localStorage.getItem("tasks");
    this.tasks=JSON.parse(tasksJson);
    }

    if (localStorage.getItem("currentId")){
    const currentId = localStorage.getItem("currentId");
    this.currentId = Number(currentId);    
    }    
  }
  
  

  

  //Sprint 2: TASK 7 --> Each time a new task is added, the render() method is called to display the new task.

  printDiv() {
            let tasksHtmlList = [];
            
            for (let i = 0; i < this.tasks.length; i++) {
            
            let taskItem = this.tasks[i].task;
            const taskHtml = createTaskHtml(
              taskItem.name,
              taskItem.description,
              taskItem.assignedTo,
              taskItem.dueDate,
              taskItem.status,
              taskItem.id
            );
            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
          }
          
            // Create the tasksHtml by joining them with space in between
            
            const tasksHtml = tasksHtmlList.join("\n");

            // Set the inner html of the tasksList on the page
            const tasksList = document.querySelector("#divTasks");
            tasksList.innerHTML = tasksHtml;
            for (let i = 0; i < this.tasks.length; i++) {
              if(this.tasks[i].task.status === "Done")
              {
                document.getElementById(this.tasks[i].task.id).style.display = "none";
              }
            }           
            this.save();              
  }

  deleteTask(taskId)
  {
    for (let i=0;i<this.tasks.length;i++)
    {
      if(taskId === this.tasks[i].task.id)
      {
        this.tasks.splice(i,1);
      }
      else
      {
        console.log("Task ID not found ");

      }
    }
    this.printDiv();
  }
}


