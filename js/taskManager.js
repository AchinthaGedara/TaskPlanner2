const createTaskHtml = (name,description,assignedTo,dueDate,status,id) => {
  console.log(id);
    
    const html = `<div class="col-md-3 col-sm-6 mb-3">  
              <!-- task 1 start -->
                <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                  <div class="card-header text-center ">
                    <a data-bs-toggle="collapse" href="#collapseTask1" role="button" aria-expanded="false" aria-controls="collapseTask1 class="font-weight-bold">
                        ${name}
                    </a>                    
                  </div>

                  <!-- collapse task 1 start -->
                  <div class="collapse" id="collapseTask1">
                    <div class="card-body">
                    <!-- task content start  -->
                          <p class="card-text">
                              <span class= "font-weight-bold"> Description :</span>
                              <div> ${description} </div><br>
                              <span class= "font-weight-bold"> Assigned to: </span>${assignedTo} <br>
                              <span class= "font-weight-bold"> Due date: </span>${dueDate} <br>
                              <span class= "font-weight-bold">  Status: </span>${status}
                          </p>
                      <button type="button" class="btn btn-outline-success me-3" onclick='markDoneDiv(${id})'>Mark as Done</button>
                      <button type="button" class="btn btn-outline-danger ">Delete</button>
                      <!-- task content end -->
                    </div>
                  </div>   
                  <!-- collapse task 1 end -->
                </div>
                 <!-- end task 1 -->
              </div>`;
  
  return html;            

}

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
    
  }

   
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
          
  }

}


