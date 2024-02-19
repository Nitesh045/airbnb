let underlineMenuItems = document.querySelectorAll(".ticket a");
 underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
       
        underlineMenuItems.forEach(function (item) {
            item.classList.remove("active");
            
           
        });
        
        item.classList.add("active");
       
    });
    
});