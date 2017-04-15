var menu = $("#nav-menu");

var menuToggeled = false;

function menuToggle(){
    if(!menuToggeled){
        menuToggeled = true;
        menu.css({"display":"flex"});
    }
    else{
        menuToggeled = false;
        menu.css({"display":"none"});
    }
}