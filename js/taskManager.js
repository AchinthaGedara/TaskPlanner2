
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
          
  }

}



//Sprint 2: TASK 7 createTaskHTML() AND RETURN html tags.
const createTaskHtml = (name,description,assignedTo,dueDate,status,id) => {
  console.log(id);
    
    const html = `<div class="col-md-3 col-sm-6 mb-3">  
              <!-- task 1 start -->
                <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                  <div class="card-header text-center ">
                    <h5>${name}</h5>
                                        
                  </div>

                  <!-- collapse task 1 start -->
                 
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
                  
                  <!-- collapse task 1 end -->
                </div>
                 <!-- end task 1 -->
              </div>`;
  
  return html;            

}

