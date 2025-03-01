// js for Date
let myDate = new Date();
let newD = myDate.toDateString().split(" ")
// document.getElementById("week").innerText = newD
document.getElementById("week").innerText = newD[0]
document.getElementById("munth").innerText = newD[1]
document.getElementById("date").innerText = newD[2]
document.getElementById("year").innerText = newD[3]

// js for cart, buttons, history......
const completedBtn = document.querySelectorAll("#completed");
for(let btn of completedBtn){

    btn.addEventListener("click", function (event) {
        alert("Board updated successfully")
            const taskNum =document.getElementById("task-num").innerText;
            const convertedTaskNum = parseInt(taskNum);
            const amount23 = document .getElementById("amount23").innerText;
            const convertedAmount23 = parseInt(amount23);
        
            document.getElementById("amount23").innerText = Math.max(0, convertedAmount23 + 1);
            document.getElementById("task-num").innerText = Math.max(0, convertedTaskNum - 1);

            const heading = event.target.parentNode.parentNode;
            const head2 = heading.querySelector("h2").innerText
            const activityLog = document.getElementById("activity-log");
            let time = new Date();
            let currentTime = time.toLocaleTimeString();
            const ddiv =document.createElement("div")
            ddiv.innerHTML = 
            ` <p class=" text-sm px-6 py-4 bg-blue-50 mx-6 rounded-xl mb-4">You have Complete The Task ${head2} at ${currentTime}</p>`
            activityLog.appendChild(ddiv)
            event.target.classList.add("disabled")
            event.target.disabled = true;

            // completed task alert section
           let dd = document.querySelectorAll(".dd");
           if(
            dd[0].classList.contains("disabled") && 
            dd[1].classList.contains("disabled") &&
            dd[2].classList.contains("disabled") &&
            dd[4].classList.contains("disabled") &&
            dd[5].classList.contains("disabled") 
            
        ){
            alert("Congrates!!! You have completed all the current task")
            
           }
          

               
    })
    
}


// JS for activity log section 
document.getElementById("clear-history").addEventListener("click", function (event){
    const activityLog = document.getElementById("activity-log");
   activityLog.innerHTML = "";
})



document.getElementById("q&a-btn").addEventListener("click", function(event){
    window.location.href = "qanda.html"
})