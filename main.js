
// Global Arr to keep track of tasks (BASED ON SESSION-STORAGE AS OF RN)
var data = new Array();

// Loads data into INDEX.HTML page
function loadData() {
    
    // Depends on whether array has 1+ tasks or not 
    var filled = false; 

    // Init Data based on whether session has any tasks entered in it 
    if(sessionStorage.getItem("tasklist")) {
        data = JSON.parse(sessionStorage.getItem("tasklist"));
        filled = true;
    } else {
        data = new Array();
        sessionStorage.setItem("tasklist", JSON.stringify(data));
        console.log(JSON.parse(sessionStorage.getItem('tasklist'))); //debug
    }

    // Loop through data-list and create new elements as needed
    for(var task of data) {
        
        // Fill first-slot or create new slots 
        if(filled) {
            var firstSlot = document.getElementById("firstJumbo");
            var innerContent = "<div class = 'jumbotron' id = 'firstTask' > <h2> " + task + " </h2>  <div class='horizontal'>";
            innerContent += "<div class = 'wrapper'> <button type='button' id = 'btn2' onclick='completeTask(this,0)'> Complete </button> </div> ";
            innerContent += "<div class = 'wrapper'> <button type='button' id = 'btn3' onclick='deleteTask(this)'> Delete </button> </div> ";
            innerContent += " </div> </div>";
            firstSlot.innerHTML = innerContent; 
            filled = false;
        } else {
            var container = document.createElement("container");
            var innerContent = "<div class = 'def_jumbo'> <div class = 'jumbotron' > <h2> " + task + " </h2>  <div class='horizontal'>";
            innerContent += "<div class = 'wrapper'> <button type='button' id = 'btn2' onclick='completeTask(this,1)'> Complete </button> </div> ";
            innerContent += "<div class = 'wrapper'> <button type='button' id = 'btn3' onclick='deleteTask(this)'> Delete </button> </div> ";
            innerContent += " </div> </div> </div>";
            container.innerHTML = innerContent;
            var parentContainer = document.getElementById("parentContainer");
            parentContainer.append(container);
        }
    }

}

// If necessary logic is needed in transition between main task list and add new task list
function addNewTask(elem) {} 

// Clear Data in array (remove all tasks in list)
function clearData() {
    data = []; 
    sessionStorage.setItem("tasklist", JSON.stringify(data)); 
}

// Add Task into session storage 
// Fix 500MS+ problem
function addTask(elem) {
    
    // Animation for BTN
    elem.innerHTML = "Saving.";
    sleep(300).then(() => {elem.innerHTML="Saving.."});
    sleep(600).then(() => {elem.innerHTML="Saving..."});
    sleep(900).then(() => {elem.innerHTML="Saved!"});
    
    // Add Task into session storage
    var task = document.getElementById("userIN").value;
    let tempList = JSON.parse(sessionStorage.getItem("tasklist"));
    tempList.push(task);
    sessionStorage.setItem("tasklist", JSON.stringify(tempList));
    console.log(sessionStorage.getItem("tasklist")); // debug
}

// Delay program for specified amt
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Complete a given task
function completeTask(elem, i) {
    console.log(i);
}

// Delete a given task
function deleteTask(elem) {
}