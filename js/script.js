//document.addEventListener("DOMContentLoaded", function(){});
$(function(){
    
    //Same as document.querySelector("#navbarToggle").addEventListener("blur", function(event){});
    $("#navbarToggle").blur(function(event){    //.blur() to go back to the original form when looses focus !! // so if .blur() happens the below code will be executed !!
        var screenWidth = window.innerWidth; // window.innerWidth means width of the browser window
        if(screenWidth < 728){
            $("#collapsable-nav").collapse("hide");
        }
    });
});
