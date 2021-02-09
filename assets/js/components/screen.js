
window.addEventListener("resize", () => {
    
});
// window.addEventListener('orientationChange', orientationChange());


window.onload = function () {
    if (screen.width <= '576') {
    var attr = document.getElementsByTagName("details");
        for(var i=0; i < attr.length; i++) {
            attr[i].removeAttribute("open");
        } 
    }
}