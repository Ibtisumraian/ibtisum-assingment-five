
// JS for card section
const completedBtn = document.querySelectorAll("#completed");
for(let btn of completedBtn){

    btn.addEventListener("click", function (event) {
        alert()
            const taskNum =document.getElementById("task-num").innerText;
            const convertedTaskNum = parseInt(taskNum);
            const amount23 = document .getElementById("amount23").innerText;
            const convertedAmount23 = parseInt(amount23);
        
            document.getElementById("amount23").innerText = Math.max(0, convertedAmount23 + 1);
            document.getElementById("task-num").innerText = Math.max(0, convertedTaskNum - 1);

            const heading = event.target.parentNode.parentNode;
            const head2 = heading.querySelector("h2").innerText
            const activityLog = document.getElementById("activity-log");
            const ddiv =document.createElement("div")
            ddiv.innerHTML = 
            ` <p class=" text-sm px-6 py-4 bg-blue-50 mx-6 rounded-xl mb-4">You have Complete The Task ${head2} at 12:48:15 PM</p>`
            activityLog.appendChild(ddiv)
            event.target.disabled = true;
        
    })
}


// JS for activity log section 
document.getElementById("clear-history").addEventListener("click", function (event){
    const activityLog = document.getElementById("activity-log");
   activityLog.innerHTML = "";
})
