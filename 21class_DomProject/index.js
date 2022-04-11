console.log("hello world");
const addBtn = document.querySelector(".add-btn")
const remBtn = document.querySelector(".remove-btn");
const modelCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const priorityColor = document.querySelector('.priority-colors-cont');
const toolBoxColors = document.querySelectorAll('.color');
// const ticketLock = document.querySelector(".ticket-lock");

let allTicketsFromLocal = localStorage.getItem("tickets");
let allTickets = new Set();
if (allTicketsFromLocal != null)
{
    for (let t of allTicketsFromLocal)
    {

        const parse = JSON.parse(t);
        console.log(parse);
        
        allTickets.add()    
    }
}
console.log(allTickets);

let removeFlag = false;
let colorClass = "black";



filter();

function handleColor(color)
{
    color.addEventListener('click', function (e)
    {
        const currColor = color.classList[1];
        const allTcikets = mainCont.querySelectorAll('.ticket-cont');
        
        const filterList = Array.from(allTickets).filter(function (ticketObj)
        {
            return currColor === ticketObj.querySelector(".ticket-color").classList[1];
        })
        
        for (let ticket of allTcikets)
        {
            ticket.remove();    
        }

        for (let currTicket of filterList)
        {
            mainCont.append(currTicket);    
        }
    })    
}


function handleDblClick(color)
{
    color.addEventListener("dblclick", function (e)
    {        
        const allTcikets = mainCont.querySelectorAll('.ticket-cont');
        for (let ticket of allTcikets)
        {
            ticket.remove();    
        }
        for (let mainTicket of allTickets)
        {
            mainCont.append(mainTicket);        
        }
    })
}



function filter()
{
    for (let color of toolBoxColors)
    {
        handleColor(color);
        handleDblClick(color);
    }
}



remBtn.addEventListener("click", function () {
    removeFlag = !removeFlag;
    if (removeFlag)
    {
        remBtn.classList.add("active")    
    }
    else
    {
        remBtn.classList.remove("active")    
    }
});
addBtn.addEventListener("click", function (e)
{
    if (modelCont.style.display == 'flex')
    {
        modelCont.style.display = 'none';   
    }
    else
    {
        modelCont.style.display = 'flex';    
    }  
})
modelCont.addEventListener("keydown", function (e)
{
    if (e.key == 'Shift')
    {
        createTicket();
        modelCont.style.display = 'none'
    }
})

for (let child of priorityColor.children)
{
    child.addEventListener("click", function (e)
    {
        e.currentTarget.classList.add('active');
        colorClass = e.currentTarget.classList[1];
        for (let childinner of priorityColor.children)
        {
            if (e.currentTarget != childinner)
            {
                childinner.classList.remove("active")
            }    
        }
        
    })    
}



function handleLock(ticket)
{
    const ticketLock = ticket.querySelector(".ticket-lock");
    const taskArea = ticket.querySelector(".task-area");
    ticketLock.addEventListener("click", function (e)
    {
        if (ticketLock.children[0].classList.contains("fa-lock"))
        {
            ticketLock.children[0].classList.remove("fa-lock");
            ticketLock.children[0].classList.add("fa-unlock");
            taskArea.setAttribute("contenteditable", "true");
           
        }
        else
        {
            ticketLock.children[0].classList.remove("fa-unlock");
            ticketLock.children[0].classList.add("fa-lock");
            taskArea.setAttribute("contenteditable", "false");
           
        }
    })
}

function createTicket()
{
    const task = modelCont.querySelector("textarea").value;
    const ticketCont = document.createElement('div');
    ticketCont.classList.add("ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color"></div>
    <div class="ticket-id">${"#"+shortid()}</div>
    <div class="task-area">${task}</div>
    <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`;
    ticketCont.querySelector(".ticket-color").classList.add(`${colorClass}`);
    mainCont.appendChild(ticketCont);
    modelCont.querySelector("textarea").value = '';
    handleRemoval(ticketCont);
    handleLock(ticketCont)
    hanldeColor(ticketCont)
    localStorage.setItem("tickets", JSON.stringify(ticketCont));
    allTickets.add(ticketCont);
    
   
}

const colors = ["lightpink", "lightgreen", "lightblue", "black"];
function hanldeColor(ticketCont)
{
    const ticketColor = ticketCont.querySelector(".ticket-color");
    ticketColor.addEventListener("click", function (e)
    {
        const currColorClass = ticketColor.classList[1];
        let index = colors.findIndex(function (color)
        {
            return currColorClass === color;
        });
        index++;
        index %= colors.length;

        const color = colors[index];

        ticketColor.classList.remove(currColorClass);
        ticketColor.classList.add(color)
    })
}



function handleRemoval(ticket)
{
    ticket.addEventListener("click", function ()
    {
        if (removeFlag)
        {
            if (allTickets.has(ticket))
            {
        allTickets.delete(ticket);
            }
            ticket.remove();    
        }
    })
}




// function uuid()
// {
//     function s4(){
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//     return '#'+s4() + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }
