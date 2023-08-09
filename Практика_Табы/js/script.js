const one_tabs = document.querySelectorAll(".one-tabs__text"); 
const main__button_gray  = document.querySelectorAll(".main__button_gray");
const one_info = document.querySelectorAll(".main__grid_two-tabs-one");


var b= 0;
var a = 0;



one_tabs.forEach(function(item){
    item.addEventListener("click", function()
    {    
        one_tabs.forEach(function(item)
            {
                item.classList.remove("active")
                b +=1;
            })
        item.classList.add("active");
        item.classList.add("click");
        var className = item.className;


        if (className.indexOf("active click") != -1)
            {
                a +=1;
            }
    

        if (a == b) 
            {
                main__button_gray.forEach(function(item)
                {
                    item.classList.remove("disabled");
                })
            }
            b=0;
   })
   
});

