const one_tabs = document.querySelectorAll(".one-tabs__text"); 
const main__button_gray  = document.querySelectorAll(".main__button_gray");

var a = 0;
one_tabs.forEach(function(item){
    item.addEventListener("click", function()
    {
     one_tabs.forEach(function(item){
        item.classList.remove("active")
      })
    item.classList.add("active");
    item.classList.add("click");

    var className = item.className;


    if (className.indexOf("active click") != -1)
    {
        a = a+1
    }
   

    if (a == 4) 
    {
        main__button_gray.forEach(function(item)
        {
            item.classList.remove("disabled");
        })
    }
   })
});



