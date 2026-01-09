const optionmenu = document.querySelector(".select-menu")
const selectbtn = optionmenu.querySelector(".selectbtn")
const options = optionmenu.querySelectorAll(".option")
const btntxt = optionmenu.querySelector(".btntxt")

selectbtn.addEventListener("click", () => optionmenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", ()=>{
        let selectedoption = option.querySelector(".optiontxt").innerText;  
        btntxt.innerText = selectedoption;
        btntxt.style.color = "black"
        console.log(selectedoption); 
        optionmenu.classList.toggle("active")   
})});




getsite