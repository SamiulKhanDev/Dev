console.log("hello world");

const addBtn = document.querySelector(".add-btn")
const modelCont = document.querySelector(".modal-cont");
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
