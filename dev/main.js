document.body.style.transition = "0.5s";

var menuToggeled = false;
var sidenavToggle = false;

function menuToggle(){
    if(!menuToggeled){
        menuToggeled = true;
        $(".nav-links").css({"height":"50px"});
    }

    else{
        menuToggeled = false;
        $(".nav-links").css({"height":"0"});
    }
}

function SidenavToggle(){
    if(!sidenavToggle){
        sidenavToggle = true;
        $(".dash-controls").css({"height":"300px"});
    }

    else{
        sidenavToggle = false;
        $(".dash-controls").css({"height":"0"});
    }
}